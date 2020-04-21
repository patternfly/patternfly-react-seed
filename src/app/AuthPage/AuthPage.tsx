import * as React from 'react';
import { useHistory } from 'react-router-dom';
import {
  LoginFooterItem,
  LoginForm,
  LoginMainFooterBandItem,
  LoginMainFooterLinksItem,
  LoginPage,
  ListItem,
  ListVariant
} from '@patternfly/react-core';
import { YoutubeIcon, GithubIcon, TwitterIcon, MailBulkIcon, SlackIcon } from '@patternfly/react-icons';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
/* eslint-disable @typescript-eslint/camelcase, @typescript-eslint/no-var-requires */
import brandImg from './bgimages/brandImgColor.svg';
const pfbg_1200 = require('@assets/images/pfbg_1200.jpg');
const pfbg_768 = require('@assets/images/pfbg_768.jpg');
const pfbg_768_2x = require('@assets/images/pfbg_768@2x.jpg');
const pfbg_576 = require('@assets/images/pfbg_576.jpg');
const pfbg_576_2x = require('@assets/images/pfbg_576@2x.jpg');
const images = {
  lg: pfbg_1200,
  sm: pfbg_768,
  sm2x: pfbg_768_2x,
  xs: pfbg_576,
  xs2x: pfbg_576_2x
};
/* eslint-enable @typescript-eslint/camelcase, @typescript-eslint/no-var-requires */

export interface AuthPageState {
  showHelperText: boolean;
  usernameValue: string;
  isValidUsername: boolean;
  passwordValue: string;
  isValidPassword: boolean;
  isRememberMeChecked: boolean;
}

export const AuthPage: React.FunctionComponent<AuthPageState> = () => {

  const [showHelperText, setShowHelperText] = React.useState(false);
  const [usernameValue, setUsernameValue] = React.useState('');
  const [isValidUsername, setIsValidUsername] = React.useState(true);
  const [passwordValue, setPasswordValue] = React.useState('');
  const [isValidPassword, setIsValidPassword] = React.useState(true);
  const [isRememberMeChecked, setIsRememberMeChecked] = React.useState(false);

  const handleUsernameChange = (value: string) => {
    setUsernameValue(value);
  };

  const handlePasswordChange = (passwordValue: string) => {
    setPasswordValue(passwordValue);
  };

  const onRememberMeClick = () => {
    setIsRememberMeChecked(!isRememberMeChecked);
  };

  const history = useHistory();

  const onLoginButtonClick = (event: React.MouseEvent<{}>) => {
    event.preventDefault();
    setIsValidUsername(!!usernameValue);
    setIsValidPassword(!!passwordValue);
    setShowHelperText(!usernameValue || !passwordValue);

    if (!!usernameValue && !!passwordValue) {
      // auth "successful" - forward to dashboard
      history.push('/');
    }
  };

  const helperText = (
    <React.Fragment>
      <ExclamationCircleIcon />
      &nbsp;Invalid login credentials.
    </React.Fragment>
  );

  const socialMediaLoginContent = (
    <React.Fragment>
      <LoginMainFooterLinksItem target="_blank" key="1" href="https://www.youtube.com/channel/UCqLT0IEvYmb8z__9IFLSVyQ">
        <YoutubeIcon />
      </LoginMainFooterLinksItem>
      <LoginMainFooterLinksItem target="_blank" key="2" href="https://github.com/patternfly/patternfly-react">
        <GithubIcon />
      </LoginMainFooterLinksItem>
      <LoginMainFooterLinksItem target="_blank" key="3" href="https://twitter.com/hashtag/patternfly?lang=en">
        <TwitterIcon />
      </LoginMainFooterLinksItem>
      <LoginMainFooterLinksItem target="_blank" key="4" href="https://www.redhat.com/mailman/listinfo/patternfly">
        <MailBulkIcon />
      </LoginMainFooterLinksItem>
      <LoginMainFooterLinksItem target="_blank" key="5" href="https://patternfly.slack.com/">
        <SlackIcon />
      </LoginMainFooterLinksItem>
    </React.Fragment>
  );

  const signUpForAccountMessage = (
    <LoginMainFooterBandItem>
      Need an account? <a href="#">Sign up.</a>
    </LoginMainFooterBandItem>
  );
  const forgotCredentials = (
    <LoginMainFooterBandItem>
      <a href="#">Forgot username or password?</a>
    </LoginMainFooterBandItem>
  );

  const listItems = (
    <React.Fragment>
      <ListItem key="1">
        <LoginFooterItem href="#">Terms of Use </LoginFooterItem>
      </ListItem>
      <ListItem key="2">
        <LoginFooterItem href="#">Help</LoginFooterItem>
      </ListItem>
      <ListItem key="3">
        <LoginFooterItem href="#">Privacy Policy</LoginFooterItem>
      </ListItem>
    </React.Fragment>
  );

  const loginForm = (
    <LoginForm
      showHelperText={showHelperText}
      helperText={helperText}
      usernameLabel="Username"
      usernameValue={usernameValue}
      onChangeUsername={handleUsernameChange}
      isValidUsername={isValidUsername}
      passwordLabel="Password"
      passwordValue={passwordValue}
      onChangePassword={handlePasswordChange}
      isValidPassword={isValidPassword}
      rememberMeLabel="Keep me logged in for 30 days."
      isRememberMeChecked={isRememberMeChecked}
      onChangeRememberMe={onRememberMeClick}
      onLoginButtonClick={onLoginButtonClick}
    />
  );

  return (
    <LoginPage
      footerListVariants={ListVariant.inline}
      brandImgSrc={brandImg}
      brandImgAlt="PatternFly logo"
      backgroundImgSrc={images}
      backgroundImgAlt="Images"
      footerListItems={listItems}
      textContent="This is placeholder text only. Use this area to place any information or introductory message about your
      application that may be relevant to users."
      loginTitle="Log in to your account"
      loginSubtitle="Please use your single sign-on LDAP credentials"
      socialMediaLoginContent={socialMediaLoginContent}
      signUpForAccountMessage={signUpForAccountMessage}
      forgotCredentials={forgotCredentials}
    >
      {loginForm}
    </LoginPage>
  );
}
