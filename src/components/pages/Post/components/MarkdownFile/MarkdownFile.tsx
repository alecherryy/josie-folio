import "./styles.scss";
import Markdown from "markdown-to-jsx";
import { Fade } from "react-awesome-reveal";

/**
 * Markdown file component
 */
type Props = {
  file: string,
}
export const MarkdownFile = ({ file }: Props) => {
  return (
    <Fade direction="up" className="c-markdown-file">
      <Markdown children={file} />
    </Fade>
  )
}