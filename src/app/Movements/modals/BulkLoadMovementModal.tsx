import { Movement } from '@app/model/Movement';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalVariant, TextArea } from '@patternfly/react-core';
import { MutationStatus } from '@tanstack/react-query';
import React from 'react';
import { excelBulkTreatment } from '../utils/excelBulkTreatment';

type BulkLoadMovementModalProps = {
  onSubmitCallback: (movements: Movement[]) => void;
  onCloseCallback: () => void;
  status: MutationStatus;
};
const BulkLoadMovementModal = ({ onSubmitCallback, onCloseCallback, status }: BulkLoadMovementModalProps) => {
  const [content, setContent] = React.useState<string>('');

  React.useEffect(() => {
    if (status === 'success') {
      onCloseCallback();
    }
  }, [onCloseCallback, status]);

  return (
    <Modal
      isOpen
      variant={ModalVariant.small}
      onClose={onCloseCallback}
      onEscapePress={onCloseCallback}
      aria-labelledby="load-bulk-modal"
      aria-describedby="load-bulk-modal-with-dropdown"
    >
      <ModalHeader title="Carga Masiva" labelId="modal-with-dropdown" />
      <ModalBody id="modal-box-body-with-dropdown">
        <p>Haz una carga masiva de moviemiento, copiando y pegando el contenido de de un excel</p>
        <br />
        <TextArea
          value={content}
          onChange={(_event, value) => setContent(value)}
          aria-label="movements content"
          autoResize
          isDisabled={status === 'pending'}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          key="confirm"
          variant="primary"
          onClick={() => onSubmitCallback(excelBulkTreatment(content))}
          isLoading={status === 'pending'}
          isDisabled={status === 'pending' || content.trim().length === 0}
        >
          Confirm
        </Button>
        <Button key="cancel" variant="link" onClick={onCloseCallback} isDisabled={status === 'pending'}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export { BulkLoadMovementModal };
