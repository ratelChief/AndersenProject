import { connect } from 'react-redux';

import { Form } from '../components/form/Form,jsx';

const mapStateToProps = ({
  locations: {
    title
  }
});

export default connect(
  mapStateToProps
)(Form);
