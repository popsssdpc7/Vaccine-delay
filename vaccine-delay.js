// รายการวัคซีนทั้งหมด
const vaccines = [
    "HB1","BCG1","HB2","DTP-HB-Hib1","IPV1","Rota1",
    "DTP-HB-Hib2","IPV2","Rota2","DTP-HB-Hib3","OPV3","Rota3",
    "MMR1","LAJE1","LAJE2","DTP5","OPV5","DTP4",
    "HPV1","HPV2","OPV4","MMR2"
];

// สร้าง checkbox ในหน้า HTML
window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("vaccineChecklist");
    vaccines.forEach(v => {
        const div = document.createElement("div");
        div.innerHTML = `<input type="checkbox" name="vaccine" value="${v}"> ${v}`;
        container.appendChild(div);
    });
});

// ฟังก์ชันตัวอย่าง วิเคราะห์ข้อมูล
function analyzeVaccine() {
    const ageMonth = document.getElementById("ageMonth").value;
    const checked = document.querySelectorAll("input[name='vaccine']:checked");
    const received = Array.from(checked).map(i => i.value);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <b>อายุ:</b> ${ageMonth} เดือน<br>
        <b>วัคซีนที่ได้รับแล้ว:</b> ${received.length > 0 ? received.join(", ") : "ยังไม่ได้เลือก"}
    `;
}