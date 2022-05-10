const userAction = async () => {
    const myBody = $('form').serializeJSON();
    console.log(myBody);
    const response = await fetch('https://self-1b6-dev-ed.lightning.force.com/services/apexrest/Interactions/', {
      method: 'POST',
      body: myBody,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization' : 'Bearer 00D8c000004uHnW!ARQAQB.pKY3oEx4St43Ma_NbChZ9SPtdSoDY.8af3w110UQy1L2Ml8PI5wT1JwZpqiqeUHCDho2Ontl.V5vb.Xh4xvQ95i_N'
      }
    });
  }