pipeline {
    agent any

    environment {
        nodejs = 'C:\\Program Files\\nodejs\\node.exe'
        npm = 'C:\\Program Files\\nodejs\\npm.cmd'
        git = 'C:\\Program Files\\Git\\bin\\git.exe'
    }

    stages {
        stage('Checkout Development Branch') {
            steps {
                bat "\"${git}\" checkout dev"
            }
        }
        stage('Pull Code From Development Branch') {
            steps {
                bat "\"${git}\" pull origin dev"
            }
        }
        stage('Pull Code From Main Branch And Merge in Development Branch') {
            steps {
                bat "\"${git}\" pull origin main"
            }
        }
        stage('Add File in Stage') {
            steps {
                bat "\"${git}\" add ."
            }
        }
        stage('Commit Code in Development Branch') {
            steps {
                bat "\"${git}\" commit -m 'commit from main branch'"
            }
        }
        stage('Push Code in Development Branch') {
            steps {
                bat "\"${git}\" push origin dev"
            }
        }
        stage('Install Dependencies') {
            steps {
                bat "\"${npm}\" install"
            }
        }
        stage('Build App') {
            steps {
                bat "\"${npm}\" run build"
            }
        }
        stage('Run App') {
            steps {
                bat "\"${npm}\" start"
            }
        }
    }
}