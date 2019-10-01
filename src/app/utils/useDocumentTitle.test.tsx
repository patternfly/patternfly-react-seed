import { useDocumentTitle } from '@app/utils/useDocumentTitle';
import { render } from '@prj/test-setup';
import * as React from 'react';

const SamplePage = () => {
  useDocumentTitle('This is a test title');

  return null;
};

describe('useDocumentTitle tests', () => {
  test('should change the document title', async () => {
    const { container,  } = render(<SamplePage />);
    expect(container.ownerDocument!.title).toBe('This is a test title');
  });
});
