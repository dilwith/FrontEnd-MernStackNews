import PropTypes from 'prop-types';
import { CardBody, CardConteiner, CardFooter, CardHeader } from './CardStyle';
import { TextLimit } from '../TextLimit/TextLimit';

export function Card(props) {
    return (
      // <span>{props.likes?.length}</span> 
      //---> ? serve como verificador para length ser nulo em caso de nao ter likes nem comentarios
      <CardConteiner>
        <CardBody >
            <div>
              <CardHeader top={props.top}>
                <h2>{props.title}</h2> 
                <TextLimit text= { props.text} limit={140}/>
              </CardHeader>
                <CardFooter>
                    <section>
                      <i className="bi bi-hand-thumbs-up"></i>
                      <span>{props.likes?.length}</span>
                    </section>
                    <section>
                      <i className="bi bi-chat"></i>
                      <span>{props.comments?.length}</span> 
                    </section>   
                </CardFooter>
            </div>  
              
              <img src={props.banner} alt="Imagem" />
        </CardBody>
        
        
      </CardConteiner>
    );
    
  }
  Card.propTypes = {
      top: PropTypes.bool,
      title: PropTypes.string,
      text: PropTypes.string,
      banner: PropTypes.string,
      likes: PropTypes.array,
      comments: PropTypes.array,
  };
  
  
