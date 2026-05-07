import { useState } from 'react';
import { Box, Button, Typography, TextField, keyframes } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Emails from './imgs/emails-bro.svg';
import Emails2 from './imgs/emails-bro2.svg';

const EMAIL = 'contato@pedrohal.dev';

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
`;

const Contacts = () => {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);
    const [imgSrc, setImgSrc] = useState(Emails);

    const handleCopy = () => {
        navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setImgSrc(Emails2);
        setTimeout(() => {
            setCopied(false);
            setImgSrc(Emails);
        }, 1500);
    };

    return (
        <Box
            id="contatos"
            sx={{
                width: '100%',
                minHeight: '70vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                px: 3,
                py: 10,
                bgcolor: '#fafafa',
            }}
        >
            <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
                <Trans i18nKey="description.contactTitle">Get in touch</Trans>
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 3, textAlign: 'center', maxWidth: 600 }}>
                <Trans i18nKey="description.contactSubtitle" />
            </Typography>

            <Box
                component="img"
                src={imgSrc}
                alt="Email illustration"
                sx={{
                    width: { xs: 240, md: 320 },
                    mb: 3,
                    animation: copied ? `${bounce} 0.8s ease` : 'none',
                }}
            />

            <TextField
                value={EMAIL}
                variant="outlined"
                disabled
                sx={{
                    width: { xs: '100%', sm: '420px' },
                    maxWidth: 480,
                    mb: 1.5,
                    '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: copied ? '#fff' : '#000',
                        textAlign: 'center',
                        fontWeight: 600,
                    },
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: copied ? '#16a34a' : 'transparent',
                        transition: 'background-color 0.3s ease',
                    },
                }}
            />

            <Button
                variant="contained"
                onClick={handleCopy}
                startIcon={copied ? <CheckCircleIcon /> : <ContentCopyIcon />}
                sx={{
                    width: { xs: '100%', sm: '420px' },
                    maxWidth: 480,
                    backgroundColor: 'black',
                    color: 'white',
                    py: 1.2,
                    ':hover': { backgroundColor: '#222' },
                }}
            >
                {copied ? t('description.copied') : t('description.copy')}
            </Button>

            {/* Social links */}
            <Box sx={{ display: 'flex', gap: 3, mt: 4, alignItems: 'center' }}>
                <a
                    href="https://www.linkedin.com/in/pedro-alveslima"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#0A66C2', fontWeight: 600 }}
                >
                    <FaLinkedin size={26} />
                    LinkedIn
                </a>
                <a
                    href="https://github.com/pedrolaikem"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#111', fontWeight: 600 }}
                >
                    <FaGithub size={26} />
                    GitHub
                </a>
            </Box>
        </Box>
    );
};

export default Contacts;
