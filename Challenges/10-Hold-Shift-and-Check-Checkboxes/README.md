### 10. Hold Shift and Check Checkboxex

**Date:** 2 Mar 2022

**Description:**

- HTML page contains a collection of checkbox inputs and paragraphs, the user can select multiple items while holding down the shift key.
- There isn't new syntax learned but the logic was **veeeeerrrrrrrrrrryyyyyyyyyyyyyy tricky**

                  function handleCheck(e) {
                      let inBetween = false;
                      if (e.shiftKey && e.target.checked) {
                          checkboxes.forEach((checkbox) => {
                              if (checkbox === e.target || checkbox === lastChecked) {
                                  inBetween = !inBetween;
                              }
                              if (inBetween) {
                                  checkbox.checked = true;
                              }
                          });
                      }
                      lastChecked = e.target;
                  }

  - On the first function call, the checked checkbox will be assigend to lastChecked

                    function handleCheck(e) {
                        let inBetween = false;
                        lastChecked = e.target;
                    }

  - On the second function call with holding down shift key, the code will loop on the checboxes list and set inBetween to true starting from the current checked checkbox to the lastChecked

                    checkboxes.forEach((checkbox) => {
                              if (checkbox === e.target /* Start */ || checkbox === lastChecked /* End */) {
                                  inBetween = !inBetween;
                              }
                              if (inBetween) {
                                  checkbox.checked = true;
                              }
                          });
                    }

  **Demo:** [Here](https://mohmousad.github.io/JavaScript30/Challenges/10-Hold-Shift-and-Check-Checkboxes/)
