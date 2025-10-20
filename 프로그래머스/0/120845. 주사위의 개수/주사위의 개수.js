function solution(box, n) {
    let widthCount = Math.trunc( box[0] / n);
    let depthCount = Math.trunc( box[1] / n);
    let heightCount = Math.trunc( box[2] / n);
    
    return widthCount * depthCount * heightCount;
}