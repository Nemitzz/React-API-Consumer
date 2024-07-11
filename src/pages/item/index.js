import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { isEmail, isInt, isFloat } from 'validator';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import axios from '../../services/axios';
import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';
import { Form, ProfilePicture, Title } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';
import { Labels } from '../../config/labels';
import { Placeholders } from '../../config/placeholders';
import {
  ToastErrorMessages,
  ToastSuccessMessages,
} from '../../config/toastMessages';

export default function Item({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', '');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [photo, setPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/items/${id}`);
        const Photo = get(data, 'Photos[0].url', '');

        setPhoto(Photo);
        setName(data.name);
        setLastname(data.lastname);
        setEmail(data.email);
        setAge(data.age);
        setWeight(data.weight);
        setHeight(data.height);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
      }
    }

    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      toast.error(ToastErrorMessages.item_name_error);
      formErrors = true;
    }

    if (lastname.length < 3 || lastname.length > 255) {
      toast.error(ToastErrorMessages.item_lastname_error);
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error(ToastErrorMessages.item_email_error);
      formErrors = true;
    }

    if (!isInt(String(age))) {
      toast.error(ToastErrorMessages.item_age_error);
      formErrors = true;
    }

    if (!isFloat(String(weight))) {
      toast.error(ToastErrorMessages.item_weight_error);
      formErrors = true;
    }

    if (!isFloat(String(height))) {
      toast.error(ToastErrorMessages.item_height_error);
      formErrors = true;
    }

    if (formErrors) return;

    try {
      setIsLoading(true);

      if (id) {
        await axios.put(`/items/${id}`, {
          name,
          lastname,
          email,
          age,
          weight,
          height,
        });
        toast.success(ToastSuccessMessages.item_edit_success);
      } else {
        const { data } = await axios.post(`/items/`, {
          name,
          lastname,
          email,
          age,
          weight,
          height,
        });
        toast.success(ToastSuccessMessages.item_created_success);
        history.push(`item/${data.id}/edit`);
      }

      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', []);
      const errors = get(data, 'errors', []);

      if (errors.lenght > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('unknown error');
      }

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? Labels.edit_item : Labels.new_item}</Title>

      {id && (
        <ProfilePicture>
          {photo ? (
            <img src={photo} alt="{name}" />
          ) : (
            <FaUserCircle size={180} />
          )}
          <Link to={`/photos/${id}`}>
            <FaEdit size={24} />
          </Link>
        </ProfilePicture>
      )}

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={Placeholders.item_name_placeholder}
        />

        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder={Placeholders.item_lastname_placeholder}
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={Placeholders.item_email_placeholder}
        />

        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder={Placeholders.item_age_placeholder}
        />

        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder={Placeholders.item_weight_placeholder}
        />

        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder={Placeholders.item_height_placeholder}
        />

        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
}

Item.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
