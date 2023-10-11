import './style.scss';

const OurCustomers = () => {
    return (
        <div className='our-customers container'>
            <div className='our-customers-header'>
                <h3>Our Customers</h3>
                <div className='rectangle'>
                    <div className='rectangle-top'></div>
                    <div className='rectangle-bottom'></div>
                </div>
            </div>

            <div className='our-customers-main'>
                <div className='logo-customers'>
                    <img                       
                        src='https://s3-alpha-sig.figma.com/img/590b/1056/044b33e97ef3509555c13284864151c5?Expires=1698019200&Signature=FlYEd9QiPdk4G~tusQoHsQvpluzaj6I1tBixSjToHj7BKpe19wG52Do7c2RI2-JPrmV-PoE3TqIfBLd0x6jGRCR27YucRKZjepITtFWCeCXrv-kAje5PF7yKeoEqmLlRaMy3a08NJ979DCE7D0lv0IrY34UnFG-C0R-CsvjX-m4ziz2euX0BIJ~kHFu866VFL7LeyYQ8N8egVuwx9Pt6INrVpxmhE0qwHWn66tsHoojDUlmuzHRILrYpRGeA462oc4NMgn-5PbGFjpMS963zxCJoF7pn-iJBh0uX89zX07TmYxQVXZr2ilVmAg6JKsw0JfQcQ846xHMVSAp4Qni~mA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                        width={136}
                        height={71}
                    >
                    </img>
                </div>
            </div>
            
        </div>
    );
}
export default OurCustomers;