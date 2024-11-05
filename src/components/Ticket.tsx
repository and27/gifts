import { useState } from "react";

const TicketComponent = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      {!revealed && (
        <>
          <h1>🎁</h1>

          <p>
            Tienes una <strong>sorpresa</strong> esperándote.
          </p>
        </>
      )}
      <div className="ticket-container">
        {!revealed && (
          <button className="reveal-button" onClick={() => setRevealed(true)}>
            {"Ver sorpresa 👀"}
          </button>
        )}
        {revealed && (
          <>
            <div className="ticket">
              <svg
                width="90.748mm"
                height="46.917mm"
                version="1.1"
                viewBox="0 0 90.748 46.917"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(-70.696 -74.692)">
                  <path d="m78.547 121.48c0-0.13816-0.18023-0.54473-0.18343-0.99342-0.02005-2.8149-3.221-6.0006-6.6749-6.6432l-0.99219-0.18459v-31.103l0.99219-0.18265c3.4124-0.62818 6.1955-3.3184 6.6388-6.4174l0.18081-1.264h75.124l0.18081 1.264c0.4433 3.099 3.2263 5.7893 6.6388 6.4174l0.99219 0.18265v31.103l-0.99219 0.18264c-3.4124 0.62818-6.1955 3.3184-6.6387 6.4174l-0.1808 1.264-27.27 0.0674c-14.998 0.0371-47.815 0.0279-47.815-0.11024zm74.634-2.0076c0.64679-2.7269 3.1333-5.3516 5.7363-6.0549 0.58901-0.15916 1.2198-0.33158 1.4017-0.38315 0.25954-0.0736 0.33073-3.2868 0.33073-14.927s-0.0712-14.853-0.33073-14.927c-0.1819-0.05157-0.81265-0.22399-1.4017-0.38315-2.603-0.70336-5.0895-3.328-5.7363-6.0549l-0.32946-1.3891h-73.563l-0.32947 1.3891c-0.64679 2.7269-3.1333 5.3516-5.7363 6.0549-0.58901 0.15916-1.2198 0.33157-1.4017 0.38315-0.25954 0.07359-0.33073 3.2868-0.33073 14.927s0.07119 14.853 0.33073 14.927c0.1819 0.0516 0.81265 0.22399 1.4017 0.38315 2.6419 0.71387 5.3997 3.232 5.7378 6.0636l0.3279 1.3804h73.563z" />
                  <rect
                    x="79.711"
                    y="81.118"
                    width="72.717"
                    height="34.07"
                    ry="4.3904"
                    fill="#ddd"
                    stroke="#444"
                    stroke-dasharray="0.665, 1.33"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width=".665"
                  />
                </g>
                <text
                  x="46.15696"
                  y="21.28573"
                  font-family="'Bebas Neue'"
                  font-size="10.583px"
                  stroke-width=".26458"
                  text-anchor="middle"
                >
                  <tspan x="46.15696" y="21.28573" text-align="center">
                    Válido por
                  </tspan>
                  <tspan x="46.15696" y="34.648422" text-align="center">
                    un cafecito ☕
                  </tspan>
                </text>
              </svg>
            </div>

            <p className="expiry">*Aplica términos y condiciones*</p>
          </>
        )}
      </div>
    </>
  );
};

export default TicketComponent;
