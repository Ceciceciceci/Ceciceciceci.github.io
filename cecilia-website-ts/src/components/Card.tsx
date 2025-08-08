

// card header text, string
// card subtitle text,
// card picture, string url
// card button, Button
// card description, string

import Button from "./Button";

type ImageProps = {
  imageUrl: string;
  altText: string;
}

export const Title = ({ text }: { text: string }) => {
  return <h3 className='card-title'>{text}</h3>;
}

export const SubTitle = ({ text }: { text: string }) => {
  return <p className='card-subtitle'>{text}</p>
}

export const CardPicture = ({imageUrl, altText}: ImageProps) => {
  return <img className='card-image' src={imageUrl} alt={altText} />
}

export const Description = ({text}: {text: string}) => {
  return <div className='card-desc'><p>{text}</p></div>
}


interface CardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  altText: string;
  description: string;
  cardActionText?: string;
  onClick?: () => void;
}

export const Card = ({title, subtitle, imageUrl, altText, description, cardActionText, onClick}: CardProps) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <Title text={title} />
        <SubTitle text={subtitle} />
      </div>
      <div className="card-body">
        <CardPicture imageUrl={imageUrl} altText={altText} />
        <Description text={description} />
      </div>
      <div className="card-footer">
        {cardActionText && onClick && (
          <Button 
            disabled={false} 
            type={"primary"} 
            size={"small"}
            title={cardActionText}
            hasIcon={false} 
            onClick={onClick} />
        )}
      </div>
    </div>
  )
}