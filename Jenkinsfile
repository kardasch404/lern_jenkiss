pipeline {
    agent any
    tools { 
        nodejs 'NodeJS-20' 
    }
    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning Repository...'
                checkout scm
            }
        }

        // stage('Install Backend Dependencies') {
        //     steps {
        //         echo 'Installing backend deps...'
        //         dir('CareFlow-BackEnd') {
        //             sh 'npm install'
        //         }
        //     }
        // }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm ci'
            }
        }
        
        stage('Lint') {
            steps {
                echo 'Running ESLint...'
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Tests...'
                sh 'npm run test'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building application...'
                sh 'npm run build'
            }
        }


    //     stage('Test_0') {
    // parallel {
    //     stage('Backend Tests') {
    //         steps {
    //             echo 'Running Backend Tests...'
    //             // dir('CareFlow-BackEnd') {
    //             //     sh 'npm test || true'
    //             // }
    //         }
    //     }

//         stage('Frontend Tests') {
//             steps {
//                 echo 'Running Frontend Tests...'
//                 // dir('CareFlow-FrontEnd') {
//                 //     sh 'npm test || true'
//                 // }
//             }
//         }
//     }
// }


//        stage('Docker Compose Up') {
//     steps {
//         echo 'Starting Containers...'
//         sh 'docker-compose -d --build'
//     }
// }

    }

    post {
    success {
        echo 'Build succeeded, cleaning up...'
        // sh 'docker compose down || true'
    }
    failure {
        echo 'Build failed, cleaning up...'
        // sh 'docker compose down || true'
    }
}
}