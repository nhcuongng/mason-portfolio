import React from 'react';
import PropTypes from 'prop-types';
import {
  Bookmark,
  ExternalLink,
  Folder,
  GitFork,
  Github,
  Instagram,
  Linkedin,
  Loader2,
  Star,
  Twitter,
  CheckCheck,
} from 'lucide-react';
import {
  IconAppStore,
  IconCodepen,
  IconLogo,
  IconPlayStore,
  IconTelegram,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <Bookmark />;
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <ExternalLink />;
    case 'Folder':
      return <Folder />;
    case 'Fork':
      return <GitFork />;
    case 'GitHub':
      return <Github />;
    case 'Instagram':
      return <Instagram />;
    case 'Linkedin':
      return <Linkedin />;
    case 'Loader':
      return <Loader2 className="animate-spin" />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <Star />;
    case 'Twitter':
      return <Twitter />;
    case 'Telegram':
      return <IconTelegram />;
    case 'Double checked':
      return <CheckCheck />;
    default:
      return <ExternalLink />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
