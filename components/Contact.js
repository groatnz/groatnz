import styled from 'styled-components'

const ContactBox = styled.dl`
  dt { 
    float: left;
    text-align: right;
    padding-right: 0.5rem;
    width: 37%;
  }

  dd { 
    margin-left: 37%;
  }
  dd:after {
    content: "";
    display: block;
    clear: both;
  }
`
export const Contact = () =>
  <ContactBox>
    <dt>Email</dt>
    <dd>
      <a href='mailto:andrew@groat.nz'>andrew@groat.nz</a>
    </dd>
    <dt>Phone</dt><dd>+64 27 7031007</dd>
    <dt>Twitter</dt><dd><a href='https://twitter.com/avowkind'>@avowkind</a></dd>
    <dt>LinkedIn</dt><dd><a href='https://www.linkedin.com/in/andrewwatkinsnz'>andrewwatkinsnz</a></dd>
    <dt>GitHub</dt><dd><a href='https://github.com/avowkind'>GroatNZ</a></dd>
  </ContactBox>

export default Contact
