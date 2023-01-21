import * as C from "./styles";

type Props = {
  x: number;
  y: number;
  p: number;
};

export const Character = ({ x, y, p }: Props) => {
  const size = 30;
  return (
    <C.Container
      size={size}
      left={x * size}
      top={y * size}
      posicao={p}
    ></C.Container>
  );
};
