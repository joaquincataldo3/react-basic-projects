import SingleQuestion from "./Comps/Question";
import questions from './data'
import './Comps/Question.css'

function Accordion() {
  return (
    <main className="question-main-content-container">
      <div className='question-title-container'>
        <h2>Frequent Q&A</h2>
      </div>
      <div className="q-a-list">
        {
          questions.map(question => {
            return <SingleQuestion {...question} key={question.id} />
          })
        }
      </div>
    </main>
  );
}

export default Accordion;

