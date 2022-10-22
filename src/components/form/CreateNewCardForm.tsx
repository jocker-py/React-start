import React, { FC, FormEvent, LegacyRef } from 'react';
import { getCategories } from '../UI/helper/helpers';
import MySelect from '../select/MySelect';
import MyInput from '../input/MyInput';
import MyButton from '../button/myButton';
import cl from './CreateNewCardForm.module.css';
import { ICardItemProps } from '../../config/interfaces';

const NO_IMAGE_SRC =
  'https://st2.depositphotos.com/1009634/7235/v/450/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg';

interface FormProps {
  create: (newCard: ICardItemProps) => void;
  nextId: number;
}

const CreateNewCardForm: FC<FormProps> = (props) => {
  const ratings = [0, 1, 2, 3, 4, 5];
  const categories = [...getCategories()];
  const form: LegacyRef<HTMLFormElement> = React.createRef();
  const title: LegacyRef<HTMLInputElement> = React.createRef();
  const price: LegacyRef<HTMLInputElement> = React.createRef();
  const image: LegacyRef<HTMLInputElement> = React.createRef();
  const count: LegacyRef<HTMLInputElement> = React.createRef();
  const rate: LegacyRef<HTMLSelectElement> = React.createRef();
  const button: LegacyRef<HTMLButtonElement> = React.createRef();
  const category: LegacyRef<HTMLSelectElement> = React.createRef();
  const titleNotice: LegacyRef<HTMLDivElement> = React.createRef();
  const priceNotice: LegacyRef<HTMLDivElement> = React.createRef();
  const imageNotice: LegacyRef<HTMLDivElement> = React.createRef();
  const countNotice: LegacyRef<HTMLDivElement> = React.createRef();
  const showSuccess = () => {
    alert('The card was created');
  };
  const addCard = () => {
    if (
      title.current &&
      price.current &&
      category.current &&
      rate.current &&
      image.current &&
      count.current
    ) {
      const newCard = {
        title: title.current.value,
        price: +price.current.value,
        category: category.current.value,
        rating: { rate: +rate.current.value, count: +count.current.value || 0 },
        image: image.current.value.length ? image.current.value : NO_IMAGE_SRC,
        description: '',
        id: props.nextId,
      };
      props.create(newCard);
      return true;
    }
  };
  const resetForm = (): boolean => {
    if (
      title.current &&
      price.current &&
      category.current &&
      rate.current &&
      image.current &&
      count.current
    ) {
      title.current.value = '';
      price.current.value = '';
      image.current.value = '';
      count.current.value = '';
      category.current.value = categories[0].toString();
      rate.current.value = ratings[0].toString();
      return true;
    }
    return false;
  };
  const checkPrice = (): boolean => {
    if (price.current && priceNotice.current) {
      if (price.current.value.length <= 0) {
        priceNotice.current.innerText = 'The price should not be empty';
      } else if (!Number.isFinite(+price.current.value)) {
        priceNotice.current.innerText = 'The price should be a number';
      } else {
        priceNotice.current.innerText = '';
        toggleDisableButton();
        return true;
      }
    }
    toggleDisableButton();
    return false;
  };
  const checkTitle = (): boolean => {
    if (title.current && titleNotice.current) {
      if (title.current.value.length <= 0) {
        titleNotice.current.innerText = 'The title should not be empty';
      } else {
        titleNotice.current.innerText = '';
        toggleDisableButton();
        return true;
      }
    }
    toggleDisableButton();
    return false;
  };
  const checkImage = (): boolean => {
    const pattern = /^https?:\S+(?:jpg|jpeg|png|svg|ico)$/gm;
    const result = image.current ? pattern.test(image.current.value) : null;
    if (!result && imageNotice.current && image.current && image.current.value.length !== 0) {
      imageNotice.current.innerHTML = 'Image src is not correct';
      toggleDisableButton();
      return false;
    }
    imageNotice.current ? (imageNotice.current.innerHTML = '') : null;
    toggleDisableButton();
    return true;
  };
  const checkCount = (): boolean => {
    if (count.current && countNotice.current) {
      if (count.current.value.length <= 0) {
        countNotice.current.innerText = 'The stock should not be empty';
      } else if (!Number.isFinite(+count.current.value)) {
        countNotice.current.innerText = 'The stock should be a number';
      } else {
        countNotice.current.innerText = '';
        toggleDisableButton();
        return true;
      }
    }
    toggleDisableButton();
    return false;
  };
  const checkAnswers = (e: FormEvent) => {
    e.preventDefault();
    checkTitle() &&
      checkPrice() &&
      checkImage() &&
      checkCount() &&
      addCard() &&
      resetForm() &&
      showSuccess();
  };
  const removeButtonDisable = () => button.current && button.current.removeAttribute('disabled');
  const setButtonDisable = () =>
    button.current && button.current.setAttribute('disabled', 'disabled');

  const toggleDisableButton = () => {
    if (
      titleNotice.current &&
      priceNotice.current &&
      imageNotice.current &&
      countNotice.current &&
      !titleNotice.current.innerText.length &&
      !priceNotice.current.innerText.length &&
      !countNotice.current.innerText.length
    ) {
      removeButtonDisable();
      return true;
    }
    setButtonDisable();
    return false;
  };
  return (
    <form action="#" className={cl.form} ref={form} onSubmit={(e) => checkAnswers(e)}>
      <h3 className={cl.form__title}>Create Product Item</h3>
      <MyInput
        title="image src"
        type="text"
        onChange={checkImage}
        link={image}
        notice={imageNotice}
      />
      <MyInput title="title" type="text" onChange={checkTitle} link={title} notice={titleNotice} />
      <MyInput title="price" type="text" onChange={checkPrice} link={price} notice={priceNotice} />
      <MyInput title="count" type="text" onChange={checkCount} link={count} notice={countNotice} />
      <MySelect link={category} options={categories} title="category" />
      <MySelect link={rate} options={ratings} title="rate" />
      <MyButton link={button} disabled>
        Create
      </MyButton>
    </form>
  );
};

export default CreateNewCardForm;
