import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from '../../components/logs/LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';
//we are using destructuring from the app level state, since
//the method and values have been brought in through props
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }
  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

//if you want to get anything from the app level state to the component,
//it is brought in as a prop
//the log key is the name of the prop, and the log value pertains to the reducer
const mapStateToProps = (state) => ({
  log: state.log,
});
//the connect takes in the props we want as the first argument, and an object
//of methods being used as the second. in the second parenthesis, the component is placed as the value
export default connect(mapStateToProps, { getLogs })(Logs);
