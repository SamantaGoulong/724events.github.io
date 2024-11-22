import PropTypes from "prop-types";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const EventCard = ({
  imageSrc,
  imageAlt,
  date = new Date(),
  title,
  label,
  small = false,
  ...props
}) => (
    <div
      data-testid="card-testid"
      className={`EventCard${small ? " EventCard--small" : ""}`}
      {...props}
    >
      <div className="EventCard__imageContainer">
        <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
        <div className="EventCard__label">{label}</div>
      </div>
      <div className="EventCard__descriptionContainer">
        <div className="EventCard__title">{title}</div>
        <div className="EventCard__month">{getMonth(date)}</div>
      </div>
    </div>
);
  
// Déclaration des types des props
EventCard.propTypes = {
    imageSrc: PropTypes.string.isRequired, // imageSrc doit être une chaîne et est obligatoire
    imageAlt: PropTypes.string, // imageAlt est une chaîne et facultative
    date: PropTypes.instanceOf(Date).isRequired, // date doit être une instance de Date et est obligatoire
    title: PropTypes.string, // title doit être une chaîne et est obligatoire
    small: PropTypes.bool, // small est un booléen et facultatif
    label: PropTypes.string.isRequired // label est une chaîne et est obligatoire
}

EventCard.defaultProps = {
    imageAlt: 'image', // Par défaut, si imageAlt n'est pas passé, il utilisera "image"
    small: false, // Par défaut, small est false
    title: 'Titre par défaut' // Si aucun title n'est passé, il utilisera cette valeur par défaut
}

export default EventCard;
