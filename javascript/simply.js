      simplyCountdown(".simply-countdown", {
        year: 2023, // required
        month: 11, // required
        day: 7, // required
        hours: 8, // Default is 0 [0-23] integer
        words: {
          //words displayed into the countdown
          days: { singular: "hari", plural: " hari" },
          hours: { singular: "jam", plural: " jam" },
          minutes: { singular: "menit", plural: " menit" },
          seconds: { singular: "detik", plural: " detik" },
        },
      });