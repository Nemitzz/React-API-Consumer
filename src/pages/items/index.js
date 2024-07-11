import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { ItemContainer, ProfilePicture, NewItem } from './styled';
import axios from '../../services/axios';
import { Labels } from '../../config/labels';

import Loading from '../../components/Loading';
import { toast } from 'react-toastify';
import { ToastErrorMessages } from '../../config/toastMessages';

export default function Items() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await axios.get('/items');
        console.log(response.data); // Adds this console.log
        setItems(response.data);
      } catch (error) {
        console.error('Data fetching error:', error);
        toast.error(ToastErrorMessages.items_loading_error);
      }
      setIsLoading(false);
    }

    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();

    try {
      setIsLoading(true);
      await axios.delete(`/items/${id}`);
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', '');

      if (status === 401) {
        toast.error(ToastErrorMessages.login_required);
      } else {
        console.log(status);
        toast.error(ToastErrorMessages.delete_fail);
      }

      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>{Labels.items}</h1>

      <NewItem to="/item"> {Labels.create_new_item} </NewItem>

      <ItemContainer>
        {items.map((item, index) => (
          <div key={String(item.id)}>
            <ProfilePicture>
              {get(item, 'Photos[0].url', false) ? (
                <img src={item.Photos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{item.name}</span>
            <span>{item.email}</span>

            <Link to={`/item/${item.id}/edit`}>
              <FaEdit size={16} />
            </Link>

            <Link onClick={handleDeleteAsk} to={`/item/${item.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>

            <FaExclamation
              size={16}
              display="none"
              cursor="pointer"
              onClick={(e) => handleDelete(e, item.id, index)}
            />
          </div>
        ))}
      </ItemContainer>
    </Container>
  );
}
