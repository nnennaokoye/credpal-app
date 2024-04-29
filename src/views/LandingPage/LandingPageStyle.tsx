import styled from "styled-components";

export const LandingPageMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem;
  min-height: 80vh;
  background-image: linear-gradient(
    180deg,
    rgba(240, 243, 255, 0.1) 0%,
    rgba(239, 239, 255, 0) 73.96%
  );
  background-color: rgba(240, 243, 255, 0.1); /* Fallback color */
  background-position: center;
  background-size: cover;

  .landing-page-inner-body-wrapper {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 1500px) {
      max-width: 1500px;
    }
  }
  .landing-page-first-section-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 0 4rem 0;
    padding: 0rem 5rem;

    @media (min-width: 1200px) {
      flex-direction: row;
      gap: 2rem;
      width: 100%;
      justify-content: space-between;
    }
  }
  .landing-page-left-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    text-align: center;
    width: 100%;
    @media (min-width: 1200px) {
      width: 50%;
      text-align: left;
    }
  }
  .landing-page-left-wrapper h1 {
    span {
      color: var(--button-color);
    }
  }
  .landing-page-left-wrapper a {
    color: var(--button-color);
    padding: 1rem 4rem;
    display: flex;

    border-radius: 4px;
    color: #fff;
    text-decoration: none;
    background-color: var(--button-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .landing-page-right-wrapper {
    justify-content: center;
    align-items: center;
    display: none;
    @media (min-width: 1200px) {
      display: flex;
      width: 50%;
      flex-basis: 50%;
    }
  }
  .landing-page-right-wrapper img {
    max-width: 100%;
    object-fit: cover;
    height: auto;
  }

  //   second section
  .landing-page-second-section-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    gap: 2rem;
  }
  .landing-page-second-section-wrapper h1 {
    text-align: center;
    font-size: 2.5rem;
  }
  .landing-page-second-section-wrapper p {
    text-align: center;
    color: var(--normal-text-color);
    width: 70%;
  }
  .second-section-card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
  }
  .card-wrapper-inner {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
  .each-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .second-section-card-wrapper a {
    color: var(--button-color);
    padding: 1rem 4rem;
    display: flex;

    border-radius: 4px;
    color: #fff;
    text-decoration: none;
    background-color: var(--button-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .download-app-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0rem 5rem;

    width: 100%;
    background-color: #f2f4fc;
    @media (min-width: 1200px) {
      flex-direction: row;
      gap: 2rem;
      width: 100%;
      margin: 4rem 0;
      justify-content: space-between;
    }
  }

  .left-download-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;
    @media (min-width: 1200px) {
      width: 50%;
      max-width: 50%;
      min-width: 50%;
      text-align: left;
    }
  }
  .left-download-wrapper h1 {
    text-align: left;
  }
  .left-download-wrapper p {
    text-align: left;
  }
  .right-download-image-wrapper {
    justify-content: space-around;
    align-items: center;
    display: none;
    @media (min-width: 1200px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 50%;
      gap: 1rem;
      max-width: 50%;
      min-width: 50%;
      flex-basis: 50%;
    }
  }
  .phone-image {
    height: 100%;
  }

  .phone-image img,
  .card-img img {
    object-fit: contain;
    max-height: 100%;
    max-width: 100%;
  }
  .forth-section-wrapper {
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    width: 80%;
    margin: 4rem auto;
    padding: 2rem 4rem;
  }

  .forth-section-wrapper p {
    color: var(--normal-text-color);
    text-align: center;
  }
`;