import React, { Component } from 'react';
const brandImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAALCAYAAADx/yZ6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPlSURBVFiF5ZhdiFVVFMd/y5qkLxmbIhRBdCoherDCIIYQNArrIaxGafp8cKSCPl4iJu0lferjoSLMHioqDK0MgoJ5KCyKxFQKIwuaTKiYdNBRcsy8M38fzjq15865c/fZZ8ZB+sPm7rX2Wv+99rnrrL33QcU4IqlX0iJKQNIm9/9JkkX6tDSIIcRrTTgujuB4LiKWx5pwLIvguLqB75CkHZLuiHkuznXUfR+s088PeNsieGY3Wde6CI7NbvtsbPzut879BiRdUjd2qaRDPr4GYFoDnhnATcA2SZdHTtwGLHfxCuCGMoH/D3AusAh4X9LtJX1fkLRgEmI6HVgP7AXagPpkfhGYCXwPZAUjeEv+rYaS5kra4/qXY2aV9Ljbj/jv27ERS5oetO/c/6FAd3ZJjn3O0RXozorgyCvkl7GxF3DkFbK/Tj9H0nYf+zCSK6+QkrRL0jmur1IhZyeuK6lCuu/iIC9udN0yl4cldeS2hRXSzPYDn7g4J3Lebv9dD9SAOyVdFONoZifyBsjVtUBfK8mRI+QYjlzHpMDMfgM+czH2meaoAdcAT09oUKcJZvY58IaLG/wleiWXzeyr3DasPBdKmun9y4C7vL+z2YSe4VcCf5GV3uuAm4F7gJcS1zGVWCBpi/drZtaVwNEi6dpAbgXyrXpvSa7XgdVAj6Re4I+EeHJslHTc+x+Y2eYKXGXwBHArWW7tAuYCvwNPjbLS+Ngt6YJmM0l60+03unyvy3vKRi3pW/ftbm7dkGOfc6wo6Vd0qTnR3HMUR6NLTY4DktojufIte4mkd73/i6SFAV+VS80zJdaVvGUHHF118y+vtwkr5KfAIe8fJcvit8zsWJNJWoFOFw9K6nReAVdJut7Mvk5dxBShj/8O4COJHMPAfu/PIrvU/AgsNbOUCvcw0AHMIzsWpeJJYND7uyvwlIaZbZK0GlgM9JrZmLN0mJA9ZvZNwjx3A+d5f03B+CrgTEvIfjMb91NTBAbMrB1A0iNkR5d2YHoKmZkdlnQfWeG4pUJc7yS+EBOFPrKE7CsabPTZpwxW+e9O4L2gfeT6lZJmTMA8ZzJeBX4GWoCeVBIz2wY8D0R9450ktCq75Ydt3kSRV0pIZZ+KFpJta51mtiJot5FtCecDKZeCqURHgzPX1hQyMzsJrHXxAUnzK8S2FthRwb8qusmqW9hK3xUaYRrwA/AxMJDgvxI4DGw1s18Lxjf4eGfBWCMcBPqBoYR4chxwjuPNDOvwN1m8YRsc12Msht3vSJ1+C/AF2ZeIRyO5Bp3rZK7w5L4f+NPHVOw6CiNu+0/kvEU4xthnk/KMhtyn8P89BXZ27HtWql3DAAAAAElFTkSuQmCC';
const avatarImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNiAzNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CgkvKnN0eWxlbGludC1kaXNhYmxlKi8KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsdGVyOnVybCgjYik7fQoJLnN0MnttYXNrOnVybCgjYSk7fQoJLnN0M3tmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNCQkJCQkI7fQoJLnN0NHtvcGFjaXR5OjAuMTtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDV7b3BhY2l0eTo4LjAwMDAwMGUtMDI7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMjMxRjIwO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLypzdHlsZWxpbnQtZW5hYmxlKi8KPC9zdHlsZT4KCQkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTgiIGN5PSIxOC41IiByPSIxOCIvPgoJCTxkZWZzPgoJCQk8ZmlsdGVyIGlkPSJiIiB4PSI1LjIiIHk9IjcuMiIgd2lkdGg9IjI1LjYiIGhlaWdodD0iNTMuNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMSAwIi8+CgkJCTwvZmlsdGVyPgoJCTwvZGVmcz4KCQk8bWFzayBpZD0iYSIgeD0iNS4yIiB5PSI3LjIiIHdpZHRoPSIyNS42IiBoZWlnaHQ9IjUzLjYiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQk8ZyBjbGFzcz0ic3QxIj4KCQkJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE4IiBjeT0iMTguNSIgcj0iMTgiLz4KCQkJPC9nPgoJCTwvbWFzaz4KCQk8ZyBjbGFzcz0ic3QyIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wNCA2Ljg4KSI+CgkJCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJtMjIuNiAxOC4xYy0xLjEtMS40LTIuMy0yLjItMy41LTIuNnMtMS44LTAuNi02LjMtMC42LTYuMSAwLjctNi4xIDAuNyAwIDAgMCAwYy0xLjIgMC40LTIuNCAxLjItMy40IDIuNi0yLjMgMi44LTMuMiAxMi4zLTMuMiAxNC44IDAgMy4yIDAuNCAxMi4zIDAuNiAxNS40IDAgMC0wLjQgNS41IDQgNS41bC0wLjMtNi4zLTAuNC0zLjUgMC4yLTAuOWMwLjkgMC40IDMuNiAxLjIgOC42IDEuMiA1LjMgMCA4LTAuOSA4LjgtMS4zbDAuMiAxLTAuMiAzLjYtMC4zIDYuM2MzIDAuMSAzLjctMyAzLjgtNC40czAuNi0xMi42IDAuNi0xNi41YzAuMS0yLjYtMC44LTEyLjEtMy4xLTE1eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0ibTIyLjUgMjZjLTAuMS0yLjEtMS41LTIuOC00LjgtMi44bDIuMiA5LjZzMS44LTEuNyAzLTEuOGMwIDAtMC40LTQuNi0wLjQtNXoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDEzLjJjLTMuNSAwLTYuNC0yLjktNi40LTYuNHMyLjktNi40IDYuNC02LjQgNi40IDIuOSA2LjQgNi40LTIuOCA2LjQtNi40IDYuNHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Im05LjQgNi44YzAtMyAyLjEtNS41IDQuOS02LjMtMC41LTAuMS0xLTAuMi0xLjYtMC4yLTMuNSAwLTYuNCAyLjktNi40IDYuNHMyLjkgNi40IDYuNCA2LjRjMC42IDAgMS4xLTAuMSAxLjYtMC4yLTIuOC0wLjYtNC45LTMuMS00LjktNi4xeiIvPgoJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0ibTguMyAyMi40Yy0yIDAuNC0yLjkgMS40LTMuMSAzLjVsLTAuNiAxOC42czEuNyAwLjcgMy42IDAuOWwwLjEtMjN6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPgo=';
// import { Alert, Button } from '@patternfly/react-core';
// import './app.css';
import './pf-ie11.css';

export default class App extends Component {
  state = {
    isShowing: true
  };
  dismissNotification = () => {
    this.setState({ isShowing: false });
  };
  render() {
    const { isShowing } = this.state;
    return (
      <React.Fragment>
        <div className="pf-c-background-image">
        </div>
        <div className="pf-l-page" id="page-layout-default-nav">
          <header role="banner" className="pf-l-page__header">

            <div className="pf-l-page__header-brand">
              <div className="pf-l-page__header-brand-toggle">
                <button className="pf-c-button pf-m-plain" id="page-layout-default-nav-nav-toggle" aria-label="Toggle primary navigation">
                  <i className="fas fa-bars" aria-hidden="true"></i>
                </button>
              </div>
              <a className="pf-l-page__header-brand-link">
                <img className="pf-c-brand" src={brandImg} alt="Patternfly Logo" />
              </a>
            </div>

            <div className="pf-l-page__header-tools">
              <div className="pf-l-toolbar">
                <div className="pf-l-toolbar__group pf-u-sr-only pf-u-visible-on-lg">
                  <div className="pf-l-toolbar__item">
                    <button className="pf-c-button pf-m-plain" aria-label="Notifications">
                      <i className="fas fa-bell" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div className="pf-l-toolbar__item">
                    <button className="pf-c-button pf-m-plain" aria-label="Settings">
                      <i className="fas fa-cog" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <div className="pf-l-toolbar__group">
                  <div className="pf-l-toolbar__item pf-u-hidden-on-lg pf-u-mr-0">
                    <button className="pf-c-button pf-m-plain" aria-label="Overflow actions">
                      <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div className="pf-l-toolbar__item pf-u-sr-only pf-u-visible-on-md">
                    <div className="pf-c-dropdown pf-m-plain">
                      <button id="page-layout-default-nav-dropdown-button" className="pf-c-dropdown__toggle pf-m-plain" aria-expanded="false">
                        <span className="pf-c-dropdown__toggle-text">
                          Kyle Baker
                        </span>
                        <i className="fas fa-caret-down pf-c-dropdown__toggle-icon" aria-hidden="true"></i>
                      </button>
                      <div className="pf-c-dropdown__menu" hidden>
                        Kyle Baker
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="pf-c-avatar" src={avatarImg} alt="Avatar Image" />
            </div>

          </header>

          <aside className="pf-l-page__sidebar">
            <nav className="pf-c-nav" id="page-layout-default-nav-primary-nav" aria-label="Primary Nav Default Example">
              <ul className="pf-c-nav__list">
                <li className="pf-c-nav__item">
                  <a href="#" className="pf-c-nav__link pf-m-current" aria-current="page">
                    System Panel
                  </a>
                </li>
                <li className="pf-c-nav__item">
                  <a href="#" className="pf-c-nav__link">
                    Policy
                  </a>
                </li>
                <li className="pf-c-nav__item">
                  <a href="#" className="pf-c-nav__link">
                    Authentication
                  </a>
                </li>
                <li className="pf-c-nav__item">
                  <a href="#" className="pf-c-nav__link">
                    Network Services
                  </a>
                </li>
                <li className="pf-c-nav__item">
                  <a href="#" className="pf-c-nav__link">
                    Server
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <section role="main" className="pf-l-page__main">

            <section className="pf-l-page__main-section pf-m-light">
              <div className="pf-c-content">
                <h1>Main Title</h1>
                <p>
                  Body text should be Overpass Regular at 16px. It should have leading of 24px because
                <br /> of it’s relative line height of 1.5.
              </p>
              </div>
            </section>

            <section className="pf-l-page__main-section">
              <div className="pf-l-gallery pf-m-gutter">
                <div className="pf-l-gallery__item">
                  <div className="pf-c-card">
                    <div className="pf-c-card__body">
                      This is a card

                      {/* {isShowing && (
                        <div className="notification-container">
                          <Alert
                            variant="success"
                            title="Setup Complete"
                            action={
                              <Button onClick={this.dismissNotification} variant="secondary">
                                Dismiss
                              </Button>
                            }
                          >
                            You have successfully launched your patternfly starter project.
                          </Alert>
                        </div>
                      )} */}

                    </div>
                  </div>
                </div>
                <div className="pf-l-gallery__item">
                  <div className="pf-c-card">
                    <div className="pf-c-card__body">
                      This is a card
                    </div>
                  </div>
                </div>
                <div className="pf-l-gallery__item">
                  <div className="pf-c-card">
                    <div className="pf-c-card__body">
                      This is a card
                    </div>
                  </div>
                </div>
                <div className="pf-l-gallery__item">
                  <div className="pf-c-card">
                    <div className="pf-c-card__body">
                      This is a card
                    </div>
                  </div>
                </div>
                <div className="pf-l-gallery__item">
                  <div className="pf-c-card">
                    <div className="pf-c-card__body">
                      This is a card
                    </div>
                  </div>
                </div>
                <div className="pf-l-gallery__item">
                  <div className="pf-c-card">
                    <div className="pf-c-card__body">
                      This is a card
                    </div>
                  </div>
                </div>
                <div className="pf-l-gallery__item">
                  <div className="pf-c-card">
                    <div className="pf-c-card__body">
                      This is a card
                    </div>
                  </div>
                </div>
                <div className="pf-l-gallery__item">
                  <div className="pf-c-card">
                    <div className="pf-c-card__body">
                      This is a card
                    </div>
                  </div>
                </div>
                <div className="pf-l-gallery__item">
                  <div className="pf-c-card">
                    <div className="pf-c-card__body">
                      This is a card
                    </div>
                  </div>
                </div>
                <div className="pf-l-gallery__item">
                  <div className="pf-c-card">
                    <div className="pf-c-card__body">
                      This is a card
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </section>

        </div>
      </React.Fragment>
    );
  }
}
