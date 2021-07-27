1. 함수란?

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/548936eb-a185-4996-a437-47e95f405ca0.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/548936eb-a185-4996-a437-47e95f405ca0.png)

이전에 변수를 공부할 때 재사용의 개념을 알려준 적 있음

여러 맥락에서 다시 사용할수록 하는것

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/6345497c-3ca6-4029-9ef2-7124905eafb4.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/6345497c-3ca6-4029-9ef2-7124905eafb4.png)

하나의 코드를 개선하면 상호작용이 여러군데에서 일어난다.

이 재사용성이 어떻게 발생된느가에 대해 정확히 이해하기

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/a732f707-da51-4b20-af51-4469c99789c8.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/a732f707-da51-4b20-af51-4469c99789c8.png)

문법

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/ec47d39c-5cf1-4a50-bed0-1a4a7b3bf33b.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/ec47d39c-5cf1-4a50-bed0-1a4a7b3bf33b.png)

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/133ad857-e1f4-4257-8513-5984ac1a5d9d.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/133ad857-e1f4-4257-8513-5984ac1a5d9d.png)

만약 괄호가 없다면 넘버링을 함수로 인식하지 못함

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/2fcc6527-f5ae-412a-b38d-1a448f7cd086.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/2fcc6527-f5ae-412a-b38d-1a448f7cd086.png)

저 안에 들어가있는 코드가 만줄짜리 코드라고 생각하고 강의 듣기

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/ebd35ae8-8ce6-4f8c-b2c2-9443eb0f1754.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/ebd35ae8-8ce6-4f8c-b2c2-9443eb0f1754.png)

함수는 여러가지 기능을 가지고 있는 문법적인 요소이다

2. 함수의 효용

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/22fbc44f-0a92-43d6-9e01-19635edb695c.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/22fbc44f-0a92-43d6-9e01-19635edb695c.png)

이 식을 함수 없이 5번 출력해야한다면 5번 적어야함

근데 만약 이걸 0부터 20까지 나오도록 코드를 바꾼다면

이걸 하나하나 바꿔야함

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/aaca979d-a491-4cc3-bac8-6ddfe72451ef.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/aaca979d-a491-4cc3-bac8-6ddfe72451ef.png)

만약 여기서 천개의 코드를 바꾸라고 한다면 불가능해짐.

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/f5621ca6-5b55-45f7-a8ce-0d369705b7f4.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/f5621ca6-5b55-45f7-a8ce-0d369705b7f4.png)

함수로 하면 이렇게 간단해짐

만약에 이걸 1000번하라고 하면 이 방식도 어려워짐 이러면

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/4379725e-bf05-48f0-a180-cfc03295701f.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/4379725e-bf05-48f0-a180-cfc03295701f.png)

반복문을 사용하면 됨

반복문은 기계적으로 그 자리에서 반복할 때 의미가 있음

여러가지 로직을 반복해서 사용하는 거면 의미가 없음

함수는 여기저기에서 호출을 하면 같은 맥락으로 사용할 수 있음

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/4f97d799-7bfd-41f2-bcf8-ba1b3ff32f88.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/4f97d799-7bfd-41f2-bcf8-ba1b3ff32f88.png)

함수의 효과는 재사용성

동일한 코드가 있을 때 이 코드를 여러곳에서 사용할 수 있음

좋은 부품을 만드는 과정

이함수를 사용하고 있는 여러곳에서 개선, 문제 해결을 하나만 하면됨

이런한 특성을 유지보수의 용이(maintance)

가독성도 향상시킴

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/20ff2af8-a239-4700-97a1-1da29f417f8d.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/20ff2af8-a239-4700-97a1-1da29f417f8d.png)

이 세가지가 프로그램이 발전하기 위한 핵심 요소임

문법적인 것들을 대면할 때 어떻게 도약하고 어떻게 극복하고 있는가에 대한 시점으로 바라보면 재미있어짐

3. 함수의 입력

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/b7913a29-7326-47ce-b021-965015213605.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/b7913a29-7326-47ce-b021-965015213605.png)

수학이랑은 상관없는 이야기니 걱정할 필요 없다.

function = 기능 작용

함수의 함은 상자 함자

상자에 어떠한 값을 주면 다른 결과가 출력되는 상자라는 뜻을 가지고 있는 주장이 잇음

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/7f3a5710-895b-4cd5-b9d1-e856c14d582b.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/7f3a5710-895b-4cd5-b9d1-e856c14d582b.png)

return이라는 코드가 등장하면 함수를 종료시킴

세미콜론 뒤에 있는 함수의 값을 앞에있는 선택자에 반환을 시킴

그래서 egoing과 k8805이라는 값이 나온다.

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/99900276-0b64-4ee8-81a1-e8134cfc8486.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/99900276-0b64-4ee8-81a1-e8134cfc8486.png)

이것의 결과는 egoing 아 맨 첫번째걸 배출해주고 이 함수는 종료됨

이것은 출력입니다.

출력은 return의 키워드

4. 함수의 출력

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/e898f9ba-a431-4499-a56c-59c6d58d3a69.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/e898f9ba-a431-4499-a56c-59c6d58d3a69.png)

이 함수의 괄호안에 arg라는 게 등장

앞의 arg는 입력과 관련 뒤에 return은 출력과 관련

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/3212b475-1e58-48a9-89bd-b715d53bfd15.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/3212b475-1e58-48a9-89bd-b715d53bfd15.png)

arg가 변수가 됨 내부적으로 arg= 1이다라는 뜻이됨

실행시키면 1, 2가 출력됨

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/183913c8-25e0-4653-84e0-502904d70acb.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/183913c8-25e0-4653-84e0-502904d70acb.png)

1000, 2000이 출력됨

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/0afbb196-5024-4533-ab78-9a59fe28f14f.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/0afbb196-5024-4533-ab78-9a59fe28f14f.png)

여기서 arg를 매개변수 parameter

그리고 저 1과 2를 잊라 argument라고 부른다

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/028763c7-9976-4cec-9b3b-2da973b81dd9.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/028763c7-9976-4cec-9b3b-2da973b81dd9.png)

답 30 50

5. 함수를 정의하는 다른 방법

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/c431c7d4-8488-4651-a465-8672f1d9031e.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/c431c7d4-8488-4651-a465-8672f1d9031e.png)

우측의 정의가 numbering이라는 함수를 꾸며줌

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/2555f415-665c-4f74-9434-8f65bc10737f.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/2555f415-665c-4f74-9434-8f65bc10737f.png)

위와 밑이 똑같은 결과임

![https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/671f3002-6df0-47f4-9b62-16e38cdea50b.png](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/891f107fd44c4b55b303ac657c22be44/671f3002-6df0-47f4-9b62-16e38cdea50b.png)

정의후 묶고 호출하는 게 하나의 문장에 들어감

익명함수

이름이 없고 바로 실행되기 때문임

함수는 코드의 재활용성을 높여준다는 점을 꼭 기억하기

함수형 언어
