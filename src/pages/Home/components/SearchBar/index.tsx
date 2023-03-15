import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { IssuesContext } from '../../../../context/IssuesContext'
import { SearchBar, SearchBarContainer } from './style'
import * as zod from 'zod'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchBarComponent() {
  const { fetchIssues, issues } = useContext(IssuesContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>()

  async function handleFetchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit(handleFetchIssues)}>
      <div className="header">
        <p>Publicações</p>
        <span>{`${issues.length} publicações`}</span>
      </div>
      <form className="main">
        <SearchBar
          autoComplete="off"
          disabled={isSubmitting}
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </form>
    </SearchBarContainer>
  )
}
