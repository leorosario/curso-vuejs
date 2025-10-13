export default {
    data: () => ({
        dados: null
    }),
    methods: {
        getDadosApi(url, queryParams = {}){           

            Object.keys(queryParams).forEach(chave => {
                if(queryParams[chave] == ''){
                    delete queryParams[chave];
                }
            });

            const UrlQueryParams = new URLSearchParams(queryParams).toString();
          
            const urlCompleta = UrlQueryParams ? `${url}&${UrlQueryParams}` : url;

            fetch(urlCompleta)
                .then(response => response.json())
                .then(response => {
                    this.dados = response;                  
                });                
        }
    },
}