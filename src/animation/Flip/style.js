import styled from "styled-components";


export const Container = styled.div`
padding: 0;
margin: 0;
box-sizing: border-box;


	-webkit-animation: flip-diagonal-1-bck 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
	animation: flip-diagonal-1-bck 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;

  
@-webkit-keyframes flip-diagonal-1-bck {
  0% {
    -webkit-transform: translateZ(0) rotate3d(1, 1, 0, 0deg);
            transform: translateZ(0) rotate3d(1, 1, 0, 0deg);
  }
  100% {
    -webkit-transform: translateZ(-260px) rotate3d(1, 1, 0, -180deg);
            transform: translateZ(-260px) rotate3d(1, 1, 0, -180deg);
  }
}
@keyframes flip-diagonal-1-bck {
  0% {
    -webkit-transform: translateZ(0) rotate3d(1, 1, 0, 0deg);
            transform: translateZ(0) rotate3d(1, 1, 0, 0deg);
  }
  100% {
    -webkit-transform: translateZ(-260px) rotate3d(1, 1, 0, -180deg);
            transform: translateZ(-260px) rotate3d(1, 1, 0, -180deg);
  }
}


`