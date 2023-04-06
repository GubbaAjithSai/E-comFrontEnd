import styled from "styled-components";

const Contact = () => {

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    *{
      color:black;
    }

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return( 
  <Wrapper>
  <h2 className="common-heading">Feel Free To Contact Us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.508646762757!2d78.00498351485335!3d16.751350888462717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca28a7c5ee6cc7%3A0x12a0ed984f20b999!2sSaraswathi%20Super%20Stores!5e0!3m2!1sen!2sin!4v1677170946364!5m2!1sen!2sin" width="600" height="450" title="my-frame" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mjvdwzvb" method="POST" className="contact-inputs">
          <input type="text" placeholder="Name" name="name" required/>
          <input type="text" placeholder="Email Id" name="email" required/>
          <textarea name="message" placeholder="Enter your message here" cols="30" rows="10"></textarea>
          <input type="submit" value="submit"/>
        </form>
      </div>
    </div>
  </Wrapper>);
};

export default Contact;
