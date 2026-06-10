import React from 'react'



export const openComparisonPage = (enquiry) => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
        newWindow.document.write(`
        <html>
        <head>
        <title>Comparison Page</title>
         <style>
        /* comparison-page.css */
        h1 {
            text-align: center;
          }
          
          .comparison-container {
           
          }
          .comparison-head {
            display: flex;
            justify-content: space-around
        }
          
          .comparison-title {
            margin: 20px;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          
          /* Styles for individual college cards */
          .college {
            margin: 20px;
            padding: 20px;
            background-color: #fff;
            display: flex;
            justify content: space around;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          
          /* College image */
          .college-details {
            margin: 20px;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 150px;
            height: 150px;
            margin-bottom: 10px;
          }
          
          /* College image */
          .college-details {
            margin: 20px;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
            
            margin-bottom: 10px;
          }
          .college-details img{
            width: 150px;
            height: 150px;
        }
          
          /* College information */
          .college-details h2 {
            margin-top: 10px;
          }
          
          .college-details p {
            margin-bottom: 5px;
          }
        </style>
        </head>
        <body>
        <h1>Comparison Page</h1>
        <div className="comparison-head">
        <span className="comparison-title">College Image</span>
        <span className="comparison-title">College Name</span>
        <span className="comparison-title">College Approvals</span>
        <span className="comparison-title">College Fees</span>
        </div>
        <div class="comparison-container">
        </div>
      </body>
    </html>
    `);
        newWindow.document.close();
        renderComparisonPage(newWindow.document.querySelector('.comparison-container'), enquiry);
    } else {
        alert('Popup blocked! Please allow popups to see the comparison page.');
    }
};

const renderComparisonPage = (container, enquiry) => {
    // Sample universities data for demonstration
    const universities = [
        { name: 'Lovely Professional University', approvals: 'UGC / AICTE / AIU / NIRF / WES / NAAC A++ / SACS COC', universimg: require('../assets/partner/lpu-logo.png'), baFees: 18000, maFees: 18000, bajmcFees: 0, majmcFees: 0, bbaFees: 0, mbaFees: 43000, bcaFees: 28000, mcaFees: 33000, bcomFees: 0, mcomFees: 23000, mscFees: 18000 },
        { name: 'Manipal university Jaipur', approvals: 'UGC / AICTE / AIU NIRF / WES / NAAC A+ ', universimg: require('../assets/partner/manipal-logo.png'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 35000, bbaFees: 22500, mbaFees: 43750, bcaFees: 22500, mcaFees: 39500, bcomFees: 16500, mcomFees: 27000, mscFees: 0 },
        { name: 'GLA University', approvals: 'UGC / AICTE / AIU/ NIRF / NAAC A+', universimg: require('../assets/partner/GLA-U-logo.jpg'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 0, bbaFees: 9250, mbaFees: 16500, bcaFees: 9250, mcaFees: 14000, bcomFees: 6500, mcomFees: 0, mscFees: 0 },
        { name: 'Jain University', approvals: 'UGC DEB / AICTE / NIRF / NAAC A++', universimg: require('../assets/partner/jain-logo.png'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 0, bbaFees: 27500, mbaFees: 40000, bcaFees: 0, mcaFees: 37500, bcomFees: 21250, mcomFees: 23000, mscFees: 0 },
        { name: 'Dy Patil University', approvals: 'UGC DEB / AICTE / AIU / NIRF / WES / NAAC A++ / ISO', universimg: require('../assets/partner/dypu.png'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 0, bbaFees: 25000, mbaFees: 50000, bcaFees: 0, mcaFees: 0, bcomFees: 0, mcomFees: 0, mscFees: 0 },
        // { name: 'Amity University', approvals: 'UGC / AICTE / AIU / NIRF / WES, NAAC, A , SAAC COC', universimg: require('../assets/partner/'), bbaFees: 25000, mbaFees: 50000 },
        { name: 'Sikkim Manipal University', approvals: 'UGC / AICTE / NIRF / NAAC A+', universimg: require('../assets/partner/smu.png'), baFees: 12500, maFees: 18750, bajmcFees: 0, majmcFees: 0, bbaFees: 0, mbaFees: 0, bcaFees: 0, mcaFees: 24500, bcomFees: 12500, mcomFees: 22500 },
        { name: 'Chandigarh University', approvals: 'UGC DEB / AICTE / AIU / NIRF / WES / NAAC A++ / QS / HBPE / ACCA', universimg: require('../assets/partner/chandigarh-university-logo.png'), maFees: 25000, bajmcFees: 22500, majmcFees: 25000, bbaFees: 26000, mbaFees: 50000, bcaFees: 27500, mcaFees: 30000, bcomFees: 0, mcomFees: 32500, mscFees: 30000 },
        { name: 'Vivekananda Global University', approvals: 'UGC / AICTE / AIU / NAAC A+', universimg: require('../assets/partner/vgu_logo.jpg'), baFees: 10000, maFees: 16000, bajmcFees: 0, majmcFees: 0, bbaFees: 19000, mbaFees: 32500, bcaFees: 19000, mcaFees: 32500, mscFees: 16000, bcomFees: 0, mcomFees: 0, },
        { name: 'Maharishi Markandeshwar University', approvals: 'UGC / AICTE / AIU/ NAAC A++ / ISO', universimg: require('../assets/partner/maharishi.png'), baFees: 0, maFees: 0, bajmcFees: 0, majmcFees: 0, bbaFees: 15000, mbaFees: 27500, bcaFees: 15000, mcaFees: 0, bcomFees: 17500, mcomFees: 0, mscFees: 17500 },
        { name: 'Jaipur National University', approvals: 'UGC / AICTE / AIU / NIRF / WES / NAAC A++ / SACS COC', universimg: require('../assets/partner/jnu-logo1.png'), baFees: 18000, maFees: 18000, bajmcFees: 0, majmcFees: 0, bbaFees: 0, mbaFees: 43000, bcaFees: 28000, mcaFees: 33000, bcomFees: 0, mcomFees: 23000, mscFees: 18000 },

    ];
    const selectedCourseFees = {
        ba: 'baFees',
        ma: 'maFees',
        bajmc: 'bajmcFees',
        majmc: 'majmcFees',
        bba: 'bbaFees',
        mba: 'mbaFees',
        bca: 'bcaFees',
        mca: 'mcaFees',
        msc: 'mscFees',
        bcom: 'bcomFees',
        mcom: 'mcomFees',

    };

    const selectedCourseData = universities.map(university => ({
        name: university.name,
        universimg: university.universimg,
        approvals: university.approvals,
        fees: university[selectedCourseFees[enquiry.course]],
    }));

    selectedCourseData.sort((a, b) => a.fees - b.fees);

    const htmlContent = selectedCourseData.map(university => `
   
  
      <div className="compare-college"> 
        <span className="college-details">
          <img src="${university.universimg}" alt="${university.name}">
        </span>
        <span className="college-details">
            <h2>${university.name}</h2>
        </span>
        <span className="college-details">
          <p>Approvals: ${university.approvals}</p>
        </span>
        <span className="college-details">
          <span>
            <p>Fees: ${university.fees}</p>
          </span>
          <span>
            <a href="" className="apply-btn">Apply</a>
          </span>
        </span>
      </div>
      `).join('');

    container.innerHTML = htmlContent;
};
