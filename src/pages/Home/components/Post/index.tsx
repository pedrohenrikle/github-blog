import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { PostContainer } from "./style";
import remarkGfm from 'remark-gfm'
import { dateFormatter } from "../../../../utilities/formatter";

interface IssueProps  {
  title: string
  content: string
  uploadedAt: string
}

export function Post({title, content, uploadedAt}: IssueProps ) {
  return (
    <Link to={''} style={{textDecoration: 'none', color: 'inherit'}}>
      <PostContainer>
        <div className="headerPost">
          <h2>{title}</h2>
          <span>{dateFormatter.format(new Date(uploadedAt))}</span>
        </div>
        <div className="content">
          <ReactMarkdown linkTarget={''} remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </PostContainer>
    </Link>
  )
}