

// code - 1
const t1 = performance.now();

for (let i = 0; i <= 100; i++) {
    let para = document.createElement("p");
    para.textContent = `This is paragraph number ${i + 1}`;
    document.body.appendChild(para);
}

const t2 = performance.now();

console.log('Time taken by code - 1 is ' + (t2 - t1) + ' milliseconds.');

// code - 2
const t3 = performance.now();

let mydiv = document.createElement("div");

for (let i = 0; i <= 100; i++) {
    let para = document.createElement("p");
    para.textContent = `This is paragraph number ${i + 1}`;
    mydiv.appendChild(para);
}

document.body.appendChild(mydiv);

const t4 = performance.now();

console.log('Time taken by code - 2 is ' + (t4 - t3) + ' milliseconds.');


// best practice - using Document Fragment

const t5 = performance.now();

let Fragment = document.createDocumentFragment();

for (let i = 0; i <= 100; i++) {
    let para = document.createElement("p");
    para.textContent = `This is paragraph number ${i + 1}`;
    // No Reflow or Repaint happens here
    Fragment.appendChild(para);
}

// 1 Reflow and 1 Repaint happens here
document.body.appendChild(Fragment);

const t6 = performance.now();

console.log('Time taken by best practice is ' + (t6 - t5) + ' milliseconds.');