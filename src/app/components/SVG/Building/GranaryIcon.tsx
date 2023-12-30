// GranaryIcon.tsx
import React from 'react';

interface GranaryIconProps {
  size?: string; // Размер иконки
  color?: string; // Основной цвет иконки
}

const GranaryIcon: React.FC<GranaryIconProps> = ({
  size = "20",
  color = "currentColor", // Используйте "currentColor", чтобы цвет можно было наследовать из родительских элементов
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_173_8524)">
      <path d="M8.54701 2.58618L9.23077 2.7586L10.2564 3.62066L11.2821 4.13791L11.9658 4.65515V5.68963H11.6239V10.5172L14.0171 11.5517V14.4827L13.3333 15L12.4786 15.5172L11.9658 15.6896V16.0345L11.1111 16.5517H9.40171L8.54701 16.2069L8.20513 15.3448L7.69231 15.6896L6.49573 15.5172L6.15385 15.3448L5.98291 14.1379H4.61539L4.27351 13.7931L3.93163 12.2414L4.61539 11.8965L4.78633 12.2414L5.29915 12.4138V11.3793H6.32479V11.7241H8.20513L8.88889 11.5517V10.6896L9.23077 9.48273H8.03419L8.71795 9.31032V8.79308L7.69231 8.44825V9.65515H6.83761V8.44825L7.17949 8.10342L7.35043 7.7586L6.15385 8.10342L5.81197 8.27584L5.47009 9.99997H4.78633L4.95727 9.13791H4.61539L4.27351 8.10342L4.10257 7.41377L5.81197 7.06894V6.03446H5.47009V4.99997L6.32479 4.13791L8.54701 2.58618Z" fill="#AA9368"/>
        <path d="M8.54701 2.58618L9.23077 2.7586L10.2564 3.62066L11.2821 4.13791L11.9658 4.65515V5.68963H11.6239L11.2821 7.7586L10.2564 8.10342V8.96549L11.2821 8.79308L10.9402 9.31032H10.0855V8.10342L9.05983 8.27584V8.96549L8.20513 8.62066L7.69231 8.44825V9.65515H6.83761V8.44825L7.17949 8.10342L7.35043 7.7586L6.15385 8.10342L5.81197 8.27584L5.47009 9.99997H4.78633L4.95727 9.13791H4.61539L4.27351 8.10342L4.10257 7.41377L5.81197 7.06894V6.03446H5.47009V4.99997L6.32479 4.13791L8.54701 2.58618Z" fill="#5E492C"/>
        <path d="M8.54702 2.58618L9.23078 2.7586L10.0855 3.79308L10.4274 3.96549V4.31032L11.2821 4.48273L11.453 4.65515V5.51722H10.2564V5.86204L8.8889 6.37929H8.20514V6.03446L6.49573 5.86204L5.81197 5.68963V6.03446H5.47009V4.99997L6.32479 4.13791L8.54702 2.58618Z" fill="#FBD955"/>
        <path d="M5.29915 11.3793H5.47009V13.4483L6.15385 13.6207V14.138L6.66667 13.9655L7.35043 12.7586L8.37607 12.5862L8.54701 13.4483V14.8276L9.05983 15L8.88889 15.3449L10.0855 15.1724L10.5983 15.6897V16.0345H9.74359L9.57265 15.8621L9.05983 16.3793L8.54701 16.2069L8.20513 15.3449L7.69231 15.6897L6.49573 15.5173L6.15385 15.3449L5.98291 14.138H4.61539L4.27351 13.7931L3.93163 12.2414L4.61539 11.8966L4.78633 12.2414L5.29915 12.4138V11.3793Z" fill="#90886D"/>
        <path d="M11.1111 10.6896L12.3077 10.8621L14.0171 11.5517L13.8462 12.2414H12.9915L13.5043 12.5862L13.3333 12.931L12.3077 12.2414V12.5862H11.9658L12.1368 13.1034L13.1624 13.2758V14.8276L12.3077 15.3448H11.7949V13.9655L11.9658 13.2758H11.6239V12.931H11.2821L11.6239 13.9655L11.453 14.8276H10.9402L11.1111 13.6207L10.4274 13.2758L9.74359 12.2414L9.23077 12.0689L9.05983 11.5517L10.5983 11.2069L11.1111 10.6896Z" fill="#8F6A28"/>
        <path d="M6.32479 7.75861H7.35043L7.52137 8.44826H6.83761V9.65516H7.69232V8.44826L8.37608 8.62067L8.71796 8.79309V9.31033L9.23078 9.48274V10.5172L8.8889 11.5517L8.20514 11.8965L6.32479 11.7241V11.3793H5.47009L5.98291 11.2069L5.64103 9.82757L5.47009 9.13792L5.81197 8.10343L6.32479 7.75861Z" fill="#C5C2AB"/>
        <path d="M5.47009 11.3793H6.32479V11.7242H7.69231L8.54701 12.2414L9.23077 12.4138L9.57265 13.9655L9.74359 13.1035L10.4274 13.6207V14.4828V15.1724V15.5173L11.453 15.6897L11.1111 15.8621L10.9402 16.3793H9.05983L9.40171 15.6897H9.74359V16.0345H10.5983V15.6897L10.0855 15.5173V15.1724L8.88889 15.3449V15L8.54701 14.8276L8.37607 12.5862L7.35043 12.9311L6.66667 14.138H6.15385V13.6207L5.47009 13.4483L5.29915 12.5862L5.47009 11.3793Z" fill="#51411B"/>
        <path d="M9.91453 3.62067L11.1111 3.96549L11.9658 4.65515V5.68963H11.6239L11.2821 7.7586L10.4274 7.93101H7.69231L7.52137 7.06894L8.37607 6.89653L8.71795 7.06894V6.5517L6.66667 6.37929L6.49573 5.86205L8.20513 6.03446V6.37929L10.2564 5.86205V5.51722H11.453L11.1111 4.48274L10.4274 4.31032V3.96549L9.91453 3.79308V3.62067Z" fill="#857E6E"/>
        <path d="M11.2821 7.06897H11.453L11.6239 10.6897L10.7692 11.2069L9.23078 11.7241V12.2414L8.03419 12.069L8.54702 11.5517H8.8889V10.6897L9.23078 9.48276H8.03419L8.71796 9.31035V8.96552H9.05984V8.27587L10.0855 8.10345V9.31035L11.1111 8.96552H10.2564V8.10345L11.1111 7.75862L11.2821 7.06897Z" fill="#8F8A78"/>
        <path d="M7.6923 12.5862H8.37606L8.547 13.4483V14.6551H8.03418V15H7.6923L7.52136 15.5172L6.66666 15.3448L6.32478 15L6.66666 14.6551L6.15384 14.3103L6.66666 13.9655L7.35042 12.7586L7.6923 12.5862Z" fill="#D9BD51"/>
        <path d="M7.17949 7.41382H7.69231V7.93106L10.9402 7.75865L10.2564 8.10347V8.96554L11.2821 8.79313L10.9402 9.31037H10.0855V8.10347L9.05983 8.27589V8.96554L8.20513 8.62071L7.69231 8.4483V9.6552H6.83761V8.4483L7.17949 8.10347L7.35043 7.75865L6.66667 7.58623L7.17949 7.41382Z" fill="#837E6C"/>
        <path d="M11.1111 10.6896L12.3077 10.8621L14.0171 11.5517L13.8461 11.8965L11.9658 12.0689L12.1367 12.4138L11.453 12.0689L9.4017 11.7241L9.91452 11.3793L10.7692 11.0345L11.1111 10.6896Z" fill="#755C33"/>
        <path d="M9.91453 3.62067L11.1111 3.96549L11.9658 4.65515V5.68963H11.6239L11.282 6.37929L9.91453 6.89653H9.05983L8.88889 6.20687L10.2564 5.86205V5.51722H11.453L11.1111 4.48274L10.4273 4.31032V3.96549L9.91453 3.79308V3.62067Z" fill="#B88D1E"/>
        <path d="M5.47009 11.3793H6.32479V11.7242H6.83761V13.1035L7.17949 13.2759L6.66667 14.138H6.15385V13.6207L5.47009 13.4483L5.29915 12.5862L5.47009 11.3793Z" fill="#685A3F"/>
        <path d="M8.20513 9.48279H9.23077V10.5173L8.88889 11.5518L8.20513 11.8966L6.32478 11.7242L6.66666 11.2069L7.52136 11.3793V10.6897L7.00854 10.5173L7.35042 10.3449L8.20513 10.5173V9.48279Z" fill="#ABA995"/>
        <path d="M10.0855 3.96552H10.4274V4.31034L11.2821 4.48276L11.453 4.65517V5.51724H10.2564V5.86207L8.54701 6.37931V5.86207H9.05983L9.23077 5L9.91453 4.48276L10.0855 3.96552Z" fill="#EBB726"/>
        <path d="M9.23077 12.931H9.40171L9.57265 13.9655L9.74359 13.1034L10.4274 13.6207V14.4828V15.1724V15.5172L11.453 15.6897L11.1111 15.8621L10.9402 16.3793H9.05983L9.40171 15.6897H9.74359V16.0345H10.5983V15.6897L10.0855 15.5172V15.1724L9.23077 15.3448V12.931Z" fill="#655C30"/>
        <path d="M13.8461 11.8965L14.0171 12.4138V14.1379L13.5043 14.6552H13.1624V13.2759H12.1367L11.9658 12.5862H12.3077V12.2414L13.1624 12.5862L12.8205 12.069L13.8461 12.2414V11.8965Z" fill="#826739"/>
        <path d="M5.29915 7.06897L5.64103 7.24138V7.58621H5.29915V8.27587H5.64103L5.47009 10H4.78633L4.95727 9.13794H4.61539L4.27351 8.10345L4.10257 7.4138L5.29915 7.06897Z" fill="#978868"/>
        <path d="M8.03419 14.6552L9.05983 14.8276L8.88889 15.3448L10.0855 15.1724L10.5983 15.6896V16.0345H9.74359L9.57265 15.862L9.05983 16.3793L8.54701 16.2069L8.20513 15.3448L7.69231 15.6896L7.00854 15.5172L7.52137 15.3448L7.69231 15H8.03419V14.6552Z" fill="#817848"/>
        <path d="M8.54702 2.58618L9.23078 2.7586L9.91454 3.62066L9.23078 3.27584L8.71796 2.93101L8.0342 3.79308L7.35043 4.31032L6.66667 4.13791L6.49573 4.99997H6.15385L5.81197 5.86204L5.47009 6.03446V4.99997L6.32479 4.13791L8.54702 2.58618Z" fill="#C9BC6E"/>
        <path d="M12.4786 13.2759H13.1624V14.8276L12.3077 15.3448H11.7949V13.9655L12.4786 13.2759Z" fill="#2D251D"/>
        <path d="M6.32479 7.75861H7.35043L7.52137 8.44826H6.83761V9.65516H7.52137V9.99999L6.49573 9.82757L5.98291 9.31033L5.81197 8.10343L6.32479 7.75861Z" fill="#A7A493"/>
        <path d="M6.49573 5.86206L8.20513 6.03447V6.3793H8.88889L9.05983 6.72413L9.57265 7.06896V7.41378H8.37607V7.93103H7.69231L7.52137 7.06896L8.37607 6.89654L8.71795 7.06896V6.55172L6.66667 6.3793L6.49573 5.86206Z" fill="#8D8775"/>
        <path d="M9.23078 9.48279H9.40172V10.6897H10.0855L9.91454 11.5518L9.23078 11.7242V12.2414L8.03419 12.069L8.54702 11.5518H8.8889V10.6897L9.23078 9.48279Z" fill="#A9A38E"/>
        <path d="M5.64103 8.27588H5.98291L6.15385 9.65519L7.00855 9.8276V10.1724H6.66667L6.49573 10.8621H6.15385V11.3793L5.47009 11.2069H5.98291L5.64103 9.8276L5.47009 9.13795L5.64103 8.27588Z" fill="#D5D4C4"/>
        <path d="M9.23077 12.069L9.91453 12.2414L10.7692 13.4483L11.1111 13.7931L10.2564 13.6207L9.91453 13.2759L9.74359 14.1379L9.40171 13.9655L9.23077 12.4138L8.54701 12.2414L9.23077 12.069Z" fill="#AC8948"/>
        <path d="M7.35042 7.75861L7.52136 8.10343L8.71794 8.27585V8.79309L7.6923 8.44826V9.65516H6.8376V8.44826L7.17948 8.10343L7.35042 7.75861Z" fill="#999684"/>
        <path d="M11.453 11.0345L13.1624 11.2069L14.0171 11.5517L13.8461 11.8966L11.9658 12.069L12.1367 12.4138L11.453 12.069L11.282 11.3793H11.7949L11.453 11.0345Z" fill="#76592C"/>
        <path d="M11.282 7.06897H11.453V10L11.1111 9.82759V8.96552H10.2564V8.10345L11.1111 7.75862L11.282 7.06897Z" fill="#9E998B"/>
        <path d="M9.05983 11.5517L10.4274 11.7241L10.7692 12.4138L11.1111 12.7586L11.2821 13.7931L10.4274 13.2758L9.74359 12.2414L9.23077 12.0689L9.05983 11.5517Z" fill="#95702C"/>
        <path d="M5.29915 11.3793H5.47009V12.5862L5.29915 13.4483H4.95727V13.1035L4.27351 13.4483L3.93163 12.2414L4.61539 11.8966L4.78633 12.2414L5.29915 12.4138V11.3793Z" fill="#B4AB91"/>
        <path d="M11.9658 15.6896H12.3077L11.9658 16.3793L11.453 16.8965H9.05984L8.71796 16.2069L9.40172 16.3793H11.1111L11.453 16.0345H11.9658V15.6896Z" fill="#E4E3E1"/>
        <path d="M10.2564 7.06897H10.5983L10.4274 7.93104H8.37607V7.4138L10.2564 7.06897Z" fill="#A29D8B"/>
        <path d="M9.7436 8.10345H10.0855V9.13794L9.23078 9.48276H8.03419L8.71796 9.31035V8.96552H9.05984V8.27587L9.7436 8.10345Z" fill="#A39E8A"/>
        <path d="M8.88889 2.93103L10.0855 3.7931V4.13793H9.23077L8.88889 4.48275L8.37607 3.96551L8.71795 3.10344L8.88889 2.93103Z" fill="#FCD64A"/>
        <path d="M6.8376 11.7241L8.03418 11.8965L7.86324 12.5862L7.17948 13.1034H6.8376V11.7241Z" fill="#373426"/>
        <path d="M10.2564 11.8965L11.1111 12.2414L11.282 12.7586L11.6239 12.931H11.282L11.6239 13.9655L11.453 14.8276H10.9402V13.9655L11.1111 13.4483L10.7692 12.5862L10.2564 11.8965Z" fill="#856123"/>
        <path d="M13.8462 11.8965L14.0171 12.4138V14.1379L13.5043 14.4828L13.3333 12.5862L12.8205 12.069L13.8462 12.2414V11.8965Z" fill="#857256"/>
        <path d="M9.91454 3.62067L11.1111 3.96549L11.9658 4.65515V5.68963H11.6239L11.453 6.03446L11.2821 5.68963V4.65515L10.4274 4.31032V3.96549L9.91454 3.79308V3.62067Z" fill="#AA8E4A"/>
        <path d="M10.7692 4.31036L11.453 4.65519V5.51726H10.2564L10.0855 5.86209V5.34485H10.4273L10.5983 4.48278L10.7692 4.31036Z" fill="#DDA821"/>
        <path d="M6.49572 10L6.66666 10.5172L7.52136 10.6897V11.3793L6.32478 11.5517L6.15384 10.8621H6.49572V10Z" fill="#C7C7B0"/>
        <path d="M6.8376 13.4483H8.03418L7.86324 14.138L6.8376 14.4828L6.15384 14.3104L6.66666 13.9655L6.8376 13.4483Z" fill="#F4DF7F"/>
        <path d="M10.2564 9.31036H10.7692V10.1724L9.57265 10.3448V9.48278L10.2564 9.31036Z" fill="#A29D88"/>
        <path d="M6.32478 7.75861H7.35042L7.52136 8.44826H6.66666V9.48274L6.32478 9.31033V7.75861Z" fill="#CCC9B3"/>
        <path d="M11.282 5.86206V6.3793L9.91453 6.89654H9.05983L8.88889 6.3793L11.1111 6.03447L11.282 5.86206Z" fill="#59461B"/>
        <path d="M6.8376 14.4828H7.86324V14.8276H7.52136V15.5173L6.66666 15.3449L6.32478 15L6.8376 14.4828Z" fill="#F1DF7F"/>
        <path d="M8.37607 12.7586H8.88889L9.05983 13.6207V14.8276H8.54701L8.37607 12.7586Z" fill="#7D6225"/>
        <path d="M6.15385 12.4138H6.49573V14.138H6.15385V13.6207L5.47009 13.4483L5.29915 12.5862H5.64103L5.98291 13.1035L6.15385 12.4138Z" fill="#5E4620"/>
        <path d="M5.47009 11.5517L6.15385 11.8965L6.32479 12.4138L6.15385 13.2758L5.47009 12.5862V11.5517Z" fill="#8A6839"/>
        <path d="M5.81197 6.03448L6.66667 6.55173V6.89655L7.17949 7.06897L6.83761 7.24138H5.81197V6.03448Z" fill="#AB9C7D"/>
        <path d="M5.64102 5.51721L6.49572 5.68963L6.66666 6.20687H7.52136V6.72411L6.66666 6.89652L5.81196 6.03445L5.64102 5.51721Z" fill="#564920"/>
        <path d="M9.57266 15.1724H10.0855L10.5983 15.6897V16.0345H9.7436V15.6897H8.71796V15.3448L9.57266 15.1724Z" fill="#A0B669"/>
        <path d="M8.37607 9.48279H9.23077V10.5173H8.37607V9.48279Z" fill="#C7C1AD"/>
        <path d="M5.1282 13.9655H6.15385L6.32479 14.3103L6.83761 14.6552L6.49573 15L7.00855 15.3448L6.83761 15.6897L6.15385 15.3448L5.98291 14.1379H5.1282V13.9655Z" fill="#AFA67E"/>
        <path d="M9.23077 12.069L9.57265 12.2414V12.931L9.91453 13.1035L9.74359 14.1379L9.40171 13.9655L9.23077 12.4138L8.54701 12.2414L9.23077 12.069Z" fill="#927C5D"/>
        <path d="M11.282 12.931H11.6239V13.2759H11.9658L11.7949 15.3448L11.453 14.8276V13.6207L11.282 12.931Z" fill="#A98245"/>
        <path d="M7.69231 12.5862H8.37607V13.4483H7.00854L7.35043 12.7586L7.69231 12.5862Z" fill="#BCA14C"/>
        <path d="M6.8376 8.4483L7.52136 8.62072V9.6552H6.8376V8.4483Z" fill="#211D19"/>
        <path d="M9.40171 15.6896H9.74359V16.0345L11.1111 15.8621L10.9402 16.3793H9.05983L9.40171 15.6896Z" fill="#646549"/>
        <path d="M4.61539 14.1379H5.98291V14.6552L5.12821 14.8276L4.61539 14.4828V14.1379Z" fill="#E2E2E0"/>
        <path d="M12.3077 12.2414L13.1624 12.5862V13.1035H12.8205V12.7586H12.4786L12.6496 13.2759L11.9658 13.1035V12.5862H12.3077V12.2414Z" fill="#A77F3A"/>
        <path d="M5.64103 8.27588H5.98291V10.6897H5.81197L5.64103 9.8276L5.47009 9.13795L5.64103 8.27588Z" fill="#E1DFDB"/>
        <path d="M6.49573 5.86206L8.20513 6.03447V6.3793L8.88889 6.55172L6.66667 6.3793L6.49573 5.86206Z" fill="#A08830"/>
        <path d="M10.0855 4.13794H10.2564V5.17242L9.57265 5.00001L9.40171 5.86208H9.05983L9.23077 5.00001L10.0855 4.13794Z" fill="#F8C72C"/>
        <path d="M13.8462 12.4138L14.188 13.1035L14.359 13.2759V14.3104L14.0171 14.8276L13.6752 14.6552L13.8462 14.4828V12.4138Z" fill="#D5D2CE"/>
        <path d="M7.86325 10.8621H8.88889V11.5517H7.86325V10.8621Z" fill="#CECAB3"/>
        <path d="M7.52137 6.37933L8.71795 6.55175V7.06899H7.17949L7.00854 6.72416H7.52137V6.37933Z" fill="#756538"/>
        <path d="M6.15385 4.82758L6.66667 4.99999L6.83761 5.51723L7.17949 5.86206L5.81197 5.68964L6.15385 4.82758Z" fill="#E5CA51"/>
        <path d="M8.03419 12.069L9.23077 12.4138L9.05983 13.1035L8.88889 12.7586L7.86325 12.5862L8.03419 12.069Z" fill="#61512E"/>
        <path d="M8.20513 15.1724L8.54701 15.8621H6.66667L6.49573 15.5173H7.69231L8.20513 15.1724Z" fill="#D3D1C2"/>
        <path d="M10.2564 12.5862L10.9402 12.931L11.282 13.7931L10.4273 13.2758L10.2564 12.5862Z" fill="#A67B30"/>
        <path d="M5.47009 7.06897L6.49573 7.24138L5.81197 7.4138V8.27587H5.29915V7.58621H5.64103L5.47009 7.06897Z" fill="#785F37"/>
        <path d="M8.8889 2.93103L10.0855 3.7931V4.13793H9.7436V3.7931L8.71796 3.96551L8.8889 2.93103Z" fill="#F3CB49"/>
        <path d="M8.37607 15.5172L9.57265 15.862L9.05983 16.3793L8.54701 16.2069L8.37607 15.5172Z" fill="#86806F"/>
        <path d="M11.9658 13.7931H12.1368L12.3077 15.3448H11.7949V13.9655L11.9658 13.7931Z" fill="#453320"/>
        <path d="M5.29914 12.7586L5.47008 13.4483L6.15385 13.6207V13.9655H5.1282L5.29914 12.7586Z" fill="#7D6842"/>
        <path d="M5.29915 8.96552L5.64103 9.13793L5.47009 10H4.78633L4.95727 9.13793L5.29915 8.96552Z" fill="#A4A29B"/>
        <path d="M11.282 6.20691H11.453L11.282 7.75863L10.7692 7.58622V6.89656H11.282V6.20691Z" fill="#908C7D"/>
        <path d="M13.8462 11.8965L14.0171 12.4138L13.6752 12.931V12.5862L12.8205 12.2414L13.5043 12.069L13.8462 12.2414V11.8965Z" fill="#9A7D4C"/>
        <path d="M11.282 11.3793L12.3077 11.7242L11.9658 12.069L12.1367 12.4138L11.453 12.069L11.282 11.3793Z" fill="#78551C"/>
        <path d="M6.8376 10.5172L7.52136 10.6896V11.3793L6.8376 11.2069V10.5172Z" fill="#D8D6BB"/>
        </g>
      <defs>
        <clipPath id="clip0_173_8524">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default GranaryIcon;

