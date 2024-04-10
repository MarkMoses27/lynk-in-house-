import './LocationCoverage.css'; // Import CSS file for styling

const LocationCoverage = () => {
  return (
    <div className="location-coverage">
      <h2 className="title">We Are At Your Doorstep</h2>
      <p className="subtitle">Our mobile professionals visit residents in the following locations:</p>
      <div className="coverage-table">
        <div className="table-header">
          <div className="header-cell">County</div>
          <div className="header-cell">Coverage</div>
          <div className="header-cell">Travel Fee</div>
        </div>
        <div className="table-row">
          <div>Nairobi</div>
          <div>Everywhere except the suburbs in the east.</div>
          <div>Zero except Ksh 300 to Utawala</div>
        </div>
        <div className="table-row">
          <div>Kiambu</div>
          <div>Ruiru, Ruaka, Kiambu, Juja, Tatu City, Wangige, Thindigua, Kikuyu, …</div>
          <div>Ksh 500</div>
        </div>
        <div className="table-row">
          <div>Kajiado</div>
          <div>Ngong & Ongata Rongai</div>
          <div>Ksh 700</div>
        </div>
        <div className="table-row">
          <div>Machakos</div>
          <div>Mlolongo, Syokimau, Kitengela, & Athi-river</div>
          <div>Zero except Ksh 500 to bring the massage table.</div>
        </div>
      </div>
    </div>
  );
}

export default LocationCoverage;
