import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {

    console.log('Componente montado')
  
    return () => {
     console.log('componente desmontado')
    };
  }, [ ]);

  return (
    <div>
      <h3> Eres genial</h3>
    </div>
  );
};
