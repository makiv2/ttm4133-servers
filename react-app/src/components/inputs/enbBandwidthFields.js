

export default function EnbBandwidthFields( {eNBfieldList} ) {

  console.log('inside enb:', eNBfieldList);

  return (
    <div className="d-flex">
        {eNBfieldList.map((e) => {
          return e;
        })} 
    </div>
  );
}
