import { configure } from 'enzyme';
// import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new ReactSeventeenAdapter() });
