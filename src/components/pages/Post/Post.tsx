
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Split } from '../../layouts/Split/Split';
import { MarkdownFile } from './components/MarkdownFile/MarkdownFile';

/**
 * Blog post page
 */
type Params = {
  postTitle: string
}
export const Post = () => {
  const { postTitle } = useParams<Params>();
  const [file, setFile] = useState({
    md: ''
  });

  // look for correct markdown
  const getMarkDownFile = useCallback(async () => {
    const res = await import(`./assets/${postTitle}.md`);
    const response = await fetch(res.default);
    const text = await response.text();

    setFile({
      md: text
    });

  }, [postTitle]);

  useEffect(() => {
    getMarkDownFile();
  }, [getMarkDownFile]);

  return (
    <div className="p-post">
      <Split left={''} right={<MarkdownFile file={file.md} />} />
    </div>
  )
}