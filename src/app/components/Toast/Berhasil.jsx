import React, { useState } from "react";

export default function Berhasil() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000); 
  };

  return (
    <>
      <button onClick={handleClick}>Test Toast</button>

      {showToast && (
        <div class="toast">
          <div class="alert alert-info">
            <span>New message arrived.</span>
          </div>
        </div>
      )}
    </>
  );
}
