import PropTypes from "prop-types";
import { AboutContactBox, Button, FlexBox, IMG, Li, P } from "../../../AppStyled";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";



export const ContactsItem = ({ contact }) => {
  
  const dispatch = useDispatch();

  const handleDelete = () =>{
    dispatch(deleteContact(contact.id))};

    return (
      <Li key={contact.id}>
        <FlexBox>
        <IMG
          src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-user-user-tanah-basah-basic-outline-tanah-basah-4.png"
          alt="user"
        />
        <AboutContactBox>
          <P>{contact.name}</P>
          <P>{contact.number}</P>
        </AboutContactBox>
        </FlexBox>
        <Button
          type="button"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Li>
    );
  };

ContactsItem.propTypes = {
    contact: PropTypes.object.isRequired,
};
