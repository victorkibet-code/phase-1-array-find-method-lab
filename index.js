// code your solution here
function superbowlWin(record) {
    const winningRecord = record.find(entry => entry.result === "W");
    return winningRecord ? winningRecord.year : undefined;
  }
  