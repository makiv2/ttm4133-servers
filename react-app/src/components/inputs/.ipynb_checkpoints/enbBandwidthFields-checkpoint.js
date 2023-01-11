

export default function EnbBandwidthFields( {eNBfieldList} ) {

  return (
    <div className="d-flex">
        {eNBfieldList.map((e) => {
          return e;
        })} 
    </div>
  );
}
