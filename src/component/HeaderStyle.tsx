import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  position: sticky;
  background-color: #fff;
  z-index: 100;
  top: 0;
  align-items: center;
  padding: 0rem 5rem;
  height: 4rem;
  margin-bottom: 2rem;
  background-color: #ffff;

  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
    width: 100%;
    @media (min-width: 1500px) {
      max-width: 1500px;
    }
  }
  .left-header-wrapper {
    flex-basis: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left-header-wrapper a {
    text-decoration: none;
    font-size: 1rem;
    color: #101010;
  }
  .credpal-logo {
    width: 6rem;
  }
  .header-right-btn-wrapper {
    flex-basis: 50%;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
  }
  .header-right-btn-wrapper a {
    text-decoration: none;
    font-size: 1rem;
    color: #101010;
    margin: 0 1rem;
  }

  .small-screen-icon {
    display: block;
    color: var(--orange-color);
    @media (min-width: 768px) {
      display: none;
    }
  }
  .big-screen {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .header-right-login-btn {
    background-color: #fff;
    color: var(--orange-color);
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
  }
  .get-app {
    background-color: var(--button-color);
    color: #ffff !important;
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
  }

  .shop-header-right-btn-wrapper {
    flex-basis: 40%;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
    margin-right: 2rem;
  }

  .shop-profile-header-icon,
  .shop-profile-notification-wrapper {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .shop-profile-notification-wrapper > *,
  .shop-profile-header-icon > * {
    cursor: pointer;
  }
  .notification-badge {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--orange-color);
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 50%;
    font-size: 0.8rem;
  }

 
`;

export default HeaderStyle;