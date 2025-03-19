const headers = new Headers();
headers.append('VENDAS-KEY', process.env.VENDAS_KEY || '');

export async function fetchCashiers(initialDate: string, finalDate: string){
    const requestData = new FormData();
    requestData.append('initialDate', initialDate);

    if(finalDate) 
        requestData.append('finalDate', finalDate);
    else
        requestData.append('finalDate', initialDate);

    try{
        const response = await fetch('http://consulta.sescacre.com.br/cupons/caixas.php', {
            body: requestData,
            headers: headers,
            method: 'POST'
        });

        const data = await response.json();

        return data;
    }catch(error){
        console.error('Data Fetch Error, fetchCashiers', error);
    }
}

export async function fetchCashiersTotals(initialDate: string, finalDate: string){
    const requestData = new FormData();
    requestData.append('initialDate', initialDate);

    if(finalDate) 
        requestData.append('finalDate', finalDate);
    else
        requestData.append('finalDate', initialDate);

    try{
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await fetch('http://consulta.sescacre.com.br/cupons/totais.php', {
            body: requestData,
            headers: headers,
            method: 'POST'
        });

        const data = await response.json();

        return data;
    }catch(error){
        console.error('Data Fetch Error, fetchCashiersTotals', error);
    }
}

export async function fetchCashier(id: string, date: string){
    const requestData = new FormData();
    requestData.append('id', id);
    requestData.append('date', date);

    try{
        const response = await fetch('http://consulta.sescacre.com.br/cupons/caixa.php', {
            body: requestData,
            headers: headers,
            method: 'POST'
        });

        const data = await response.json();

        return data;
    }catch(error){
        console.error('Data Fetch Error, fetchCashier', error);
    }
}