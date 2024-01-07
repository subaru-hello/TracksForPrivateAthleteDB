import { Container } from '@chakra-ui/layout';

export const AmazonBanner = () => (
  <Container centerContent={true}>
    <iframe
      src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=48&l=ur1&category=fashion&banner=17PPV0ZYS9CFWGS4T8R2&f=ifr&linkID=0d50a3467bea3c68a07d66e1583676c1&t=subaruhello00-22&tracking_id=subaruhello00-22"
      width="100%"
      height="90"
      sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
    ></iframe>
  </Container>
);
