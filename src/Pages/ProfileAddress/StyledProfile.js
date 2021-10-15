import styled from "styled-components";

export const StyledProfile = styled.div`

  .mainCard {
    position: absolute;
    margin-top: 50px;
    margin-left: 390px !important;
    width: 60%;
    height: 500px;
    @media screen and (min-width: 600px) {
        margin-left: 180px !important;
                           
    @media screen and (min-width: 786px) {
        margin-left: 250px !important;
    }
    @media screen and (min-width: 992px) {
        margin-left: 350px !important;      
    }
    @media screen and (min-width: 1119px) {
        margin-left: 390px !important;      
    }
    hr {
      border: 1px solid #d4d4d4;
    }
    h5{
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #222222;
    }
    h6{
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #9B9B9B;


    }
    .contentwrap {
      display: flex;
      flex-direction: column;
      width: 100%;
      /* background-color: aliceblue; */
      height: 400px;
      align-items: center;
      .box1{
            margin-top: 30px;
            align-items: center;
            width: 100%;
            margin-top: 30px;
            border: 2px dashed #9B9B9B;
            border-radius: 8px;
                .textup{
                    padding-top: 34px;
                    padding-bottom: 34px;
                    text-align: center;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 18px;
                    color: #9B9B9B;
                    text-decoration: none;

                }
        }
        .box2{
            margin-top: 34px;
            width: 100%;
            height: 200px;
            border: 1px solid #DB3022;
            box-sizing: border-box;
            border-radius: 4px;
            padding-top: 30px;
            .box2txt{
                padding-left: 25px;
                font-weight: 600;
                font-size: 16px;
                line-height: 16px;
            }
            .box2txt2{
                font-weight: normal;
                font-size: 14px;
                line-height: 24px;
                padding-left: 25px;
            }
        }
        .box2 a{
            text-decoration: none;
            font-size: 16px;
            line-height: 16px;
            color: #DB3022;
            padding-left: 25px;
            cursor: pointer;
        }
    }
  }
  .titlem{
    font-weight: 600;
    font-size: 30px !important;
    line-height: 28px;
    color: #222222;
    text-align: center !important;
}
    .addressfield{
        width: 100%;
        height: 500px;
    }
    .form-check-input[type=checkbox] {
        border-radius: .25em;
        width: 25px !important;
        height: 25px !important;
    }
    .boxC{
        margin-top: 10px;
    }
  }
`;
