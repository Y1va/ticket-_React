import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieLoadingSpinner = () => {
  return (
    <i className="loading__spinner loading__spinner__results">
      <FontAwesomeIcon icon={faCircleNotch} />
    </i>
  );
};

export default MovieLoadingSpinner;
