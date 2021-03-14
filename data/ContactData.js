import * as FaIcons from 'react-icons/fa';
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";

const ContactData = [{
    title: 'facebook',
    path: 'https://www.facebook.com/moldovanu.andrei.165/',
    icon: < RiIcons.RiFacebookFill />,
    cName: 'c-icon'
},
{
    title: 'instagram',
    path: 'https://www.instagram.com/m.albert_andrei/',
    icon: < SiIcons.SiInstagram />,
    cName: 'c-icon'
},
{
    title: 'linked-in',
    path: 'https://www.linkedin.com/in/albert-andrei-moldovanu-0a8199209/',
    icon: < SiIcons.SiLinkedin />,
    cName: 'c-icon'
},
{
    title: 'whatsapp',
    path: 'https://web.whatsapp.com/',
    icon: < FaIcons.FaWhatsapp />,
    cName: 'c-icon whatsappbox'
},
{
    title: 'mail',
    path: '/contacts',
    icon: < SiIcons.SiGmail />,
    cName: 'c-icon mailbox'
}
]

export default ContactData
