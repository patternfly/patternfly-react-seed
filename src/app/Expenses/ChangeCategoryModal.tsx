import { Category } from '@app/model/Category';
import { Expense } from '@app/model/Expense';
import {
  Badge,
  Button,
  FormGroup,
  FormSelect,
  FormSelectOption,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalVariant,
} from '@patternfly/react-core';
import React from 'react';

type ChangeCategoryModalProps = {
  numberOfSelectedExpenses: number;
  categories?: Category[];
  onSubmitCallback: (category: Category) => void;
  onCloseCallback: () => void;
};
const ChangeCategoryModal = ({
  numberOfSelectedExpenses,
  categories,
  onSubmitCallback,
  onCloseCallback,
}: ChangeCategoryModalProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState<string>();
  return (
    <Modal
      isOpen
      variant={ModalVariant.small}
      onClose={onCloseCallback}
      onEscapePress={onCloseCallback}
      aria-labelledby="change-category-modal"
      aria-describedby="change-category-modal-with-dropdown"
    >
      <ModalHeader title="Cambiar Categoría" labelId="modal-with-dropdown" />
      <ModalBody id="modal-box-body-with-dropdown">
        <p>
          Cambia la categoría de múltiples conceptos <Badge isRead>{numberOfSelectedExpenses}</Badge>
        </p>
        <br />
        <FormGroup label="Categoría" fieldId="category" isRequired>
          <FormSelect
            value={selectedCategoryId}
            onChange={(_e, value) => setSelectedCategoryId(categories?.find((c) => c.id === value)?.id)}
            aria-label="FormSelect Input"
            ouiaId="BasicFormSelect"
          >
            {categories?.map((category, index) => (
              <FormSelectOption key={index} value={category.id} label={category.name} />
            ))}
          </FormSelect>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button
          key="confirm"
          variant="primary"
          onClick={() => {
            const selectedCategory = categories?.find((category) => category.id === selectedCategoryId);
            if (selectedCategory) {
              onSubmitCallback(selectedCategory);
            }
            onCloseCallback();
          }}
        >
          Confirm
        </Button>
        <Button key="cancel" variant="link" onClick={onCloseCallback}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export { ChangeCategoryModal };
