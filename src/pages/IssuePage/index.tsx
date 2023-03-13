import { Link, useParams } from "react-router-dom";
import { IssueContent, IssueHeader, IssuePageContainer } from "./style";
import banner from "../../assets/banner.svg"
import { CustomLink } from "../../utilities/CustomLink";
import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, GithubLogo} from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IssueProps {
  title: string
  user: string
  login: string
  created_at: string
  comments: number
  html_url: string
  body: string
}




export function IssueDetails() {
  const [issue, setIssue] = useState<IssueProps[]>([]);
  const { number } = useParams();
  const issueNumber = parseInt(number || "");

  const fetchIssue = useCallback(async (id?: number) => {
    await axios
      .get(`https://api.github.com/repos/pedrohenrikle/github-blog/issues/${id}`)
      .then((response) => {
        const data = response.data;

        setIssue(data);
      });
  }, []);

  useEffect(() => {
    fetchIssue(issueNumber);
  }, [fetchIssue, issueNumber]);



  return (
    <IssuePageContainer>
      <img src={banner} alt="" />

        <IssueHeader>
          <div className="links">
            <Link to={'/'} style={{textDecoration: 'none'}}>
              <CustomLink style={{display: 'flex', alignItems: 'center', lineHeight: "100%"}}>
                <CaretLeft size={12}/>
                VOLTAR
              </CustomLink>
            </Link>
            
              <Link to={issue.html_url} style={{textDecoration: 'none'}}>
                <CustomLink style={{display: 'flex', alignItems: 'center', lineHeight: "100%"}}>
                  GITHUB
                  <ArrowSquareOut size={12}/>
                </CustomLink>
              </Link>
          </div>

          <section>
            <div className="name">
              <h2>{issue.title}</h2>
            </div>
            <div className="infos">
              <div className="info-item">
                <GithubLogo size={18} />
                {issue.user?.login}
              </div>
              <div className="info-item">
                <CalendarBlank size={18} />
                {new Date(issue.created_at).toLocaleDateString('pt-br')}
              </div>
              <div className="info-item">
                <ChatCircle size={18} />
                {issue.comments}
                {issue.comments === 1 ? " comentário" : " comentários"}
              </div>
            </div>
          </section>
        
        </IssueHeader>

      <IssueContent>
        <ReactMarkdown children={issue.body} remarkPlugins={[remarkGfm]}/>
      </IssueContent>
     
    </IssuePageContainer>
  )
}